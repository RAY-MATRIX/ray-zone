import axios from 'axios'
import { type NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest): Promise<NextResponse> {
  const response = await axios({
    method: 'get',
    url: `${process.env.WISH_API_URL}/wishes`,
    headers: {
      'Cache-Control': 'no-cache',
    },
  })
  const result = response.data
  return NextResponse.json({ data: result })
}
