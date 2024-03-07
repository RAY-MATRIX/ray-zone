import { FC } from 'react'
import { Card } from '../../Cards'

interface Props {
  pickedCard: Card
}

const PickedCard: FC<Props> = ({ pickedCard }) => (
  <div className="p-2 text-white bg-[#f16a70] rounded my-2">
    <h6 className="mb-1 text-lg">{pickedCard.name}</h6>
    <p>{pickedCard.content}</p>
  </div>
)

export default PickedCard
