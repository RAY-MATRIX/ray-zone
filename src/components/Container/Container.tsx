import { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Container: FC<Props> = ({ children }) => (
  <div className="mx-auto my-0 max-w-[1280px] px-6 w-full">{children}</div>
)

export default Container
