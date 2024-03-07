import { FC, ReactNode } from 'react'

interface Props {
  icon: React.ReactNode
  children: ReactNode
}
const Item: FC<Props> = ({ icon, children }) => (
  <div className="flex justify-between w-[120px] ">
    <div className="w-6">{icon}</div>
    <div>{children}</div>
  </div>
)

export default Item
