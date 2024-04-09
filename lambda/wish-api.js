import { DynamoDBClient } from '@aws-sdk/client-dynamodb'
import {
  DynamoDBDocumentClient,
  DeleteCommand,
  PutCommand,
  GetCommand,
  ScanCommand,
  UpdateCommand,
} from '@aws-sdk/lib-dynamodb'
import { v4 as uuidv4 } from 'uuid'

const client = new DynamoDBClient({ region: 'ap-southeast-2' })
const docClient = DynamoDBDocumentClient.from(client)

const dynamodbTableName = 'wish-inventory'
const healthPath = '/health'
const wishPath = '/wish'
const wishesPath = '/wishes'

export const handler = async function (event) {
  console.log('Request event:', event)
  let response
  switch (true) {
    case event.httpMethod === 'GET' && event.path === healthPath:
      response = buildResponse(200)
      break
    case event.httpMethod === 'GET' && event.path === wishesPath:
      response = await getWishes()
      break
    case event.httpMethod === 'GET' && event.path === wishPath:
      response = await getWish(event.queryStringParameters.id)
      break
    case event.httpMethod === 'POST' && event.path === wishPath:
      response = await saveWish(JSON.parse(event.body))
      break
    case event.httpMethod === 'PATCH' && event.path === wishPath:
      const requestBody = JSON.parse(event.body)
      response = await modifyWish(requestBody.id, requestBody.updateValue)
      break
    case event.httpMethod === 'DELETE' && event.path === wishPath:
      response = await deleteWish(JSON.parse(event.body).id)
      break
  }
  return response
}

// get the wish by id
async function getWish(id) {
  const command = new GetCommand({
    TableName: dynamodbTableName,
    Key: {
      id,
    },
  })

  return await docClient.send(command).then(
    (response) => {
      if (response.Item) {
        const body = {
          Operation: 'GET',
          Message: 'SUCCESS',
          data: response.Item,
        }
        return buildResponse(200, body)
      }
      return buildResponse(404, { Message: `wish with ${id} is not found` })
    },
    (error) => {
      console.error('Get wish failed: ', error)
      const errorBody = {
        Operation: 'GET',
        Message: 'FAILED',
        Error: error,
      }
      return buildResponse(400, errorBody)
    }
  )
}

// get all wishes
async function getWishes() {
  const command = new ScanCommand({
    TableName: dynamodbTableName,
  })
  const wishes = await scanDynamoRecords(command, [])
  const body = {
    Operation: 'GET',
    Message: 'SUCCESS',
    data: wishes,
  }
  return buildResponse(200, body)
}

// scan the db for multiple items
async function scanDynamoRecords(command, itemArray) {
  try {
    const dynamoData = await docClient.send(command)
    itemArray = itemArray.concat(dynamoData.Items)
    if (dynamoData.LastEvaluatedKey) {
      const command = new ScanCommand({
        TableName: dynamodbTableName,
        ExclusiveStartkey: dynamoData.LastEvaluatedKey,
      })
      return await scanDynamoRecords(command, itemArray)
    }
    return itemArray
  } catch (error) {
    console.error('Scan Dynamo Records failed: ', error)
    return buildResponse(400, { Error: error })
  }
}

// save a wish
async function saveWish(requestBody) {
  const id = uuidv4()
  const command = new PutCommand({
    TableName: dynamodbTableName,
    Item: { ...requestBody, id },
  })

  return await docClient.send(command).then(
    (response) => {
      const body = {
        Operation: 'SAVE',
        Message: 'SUCCESS',
        Item: requestBody,
      }
      return buildResponse(200, body)
    },
    (error) => {
      console.error('Save wish failed ', error)
      const errorBody = {
        Operation: 'SAVE',
        Message: 'FAILED',
        Error: error,
      }
      return buildResponse(400, errorBody)
    }
  )
}

// update a wish by id
async function modifyWish(id, updateValue) {
  const updateExpressionParts = []
  const expressionAttributeValues = {}

  for (const [key, value] of Object.entries(updateValue)) {
    const attributeName = `${key}`
    const attributeValue = `:${key}`

    updateExpressionParts.push(`${attributeName} = ${attributeValue}`)
    expressionAttributeValues[attributeValue] = value
  }
  const command = new UpdateCommand({
    TableName: dynamodbTableName,
    Key: {
      id,
    },
    UpdateExpression: `set ${updateExpressionParts.join(', ')}`,
    ExpressionAttributeValues: expressionAttributeValues,
    ReturnValues: 'ALL_NEW',
  })

  return await docClient.send(command).then(
    (response) => {
      const body = {
        Operation: 'UPDATE',
        Message: 'SUCCESS',
        data: response.Attributes,
      }
      return buildResponse(200, body)
    },
    (error) => {
      console.error('Update wish failed: ', error)
      const errorBody = {
        Operation: 'UPDATE',
        Message: 'FAILED',
        Error: error,
      }
      return buildResponse(400, errorBody)
    }
  )
}

// delete a wish by id
async function deleteWish(id) {
  const command = new DeleteCommand({
    TableName: dynamodbTableName,
    Key: {
      id: id,
    },
    ReturnValues: 'ALL_OLD',
  })

  return await docClient.send(command).then(
    (response) => {
      if (response.Attributes) {
        const body = {
          Operation: 'DELETE',
          Message: 'SUCCESS',
          Item: response.Attributes,
        }
        return buildResponse(200, body)
      }
      return buildResponse(404, { Message: `wish with ${id} is not found` })
    },
    (error) => {
      console.error('Delete wish failed: ', error)
      const errorBody = {
        Operation: 'DELETE',
        Message: 'FAILED',
        Error: error,
      }
      return buildResponse(400, errorBody)
    }
  )
}

// build the response structure
function buildResponse(statusCode, body) {
  return {
    statusCode: statusCode,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }
}
