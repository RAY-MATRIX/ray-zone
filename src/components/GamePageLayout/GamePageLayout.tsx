import { FC, ReactElement, ReactNode } from 'react'
import Container from '../Container'
import Footer from '../Footer'

interface Props {
  children: ReactNode
}

const GamePageLayout: FC<Props> = ({ children }) => {
  return (
    <div
      className="flex flex-col min-h-[100vh]"
      style={{
        background:
          'linear-gradient(rgb(239, 187, 207), rgb(134, 117, 169) 60%)',
      }}>
      <div className="flex flex-1 flex-col"> {children}</div>
      <footer>
        <Container>
          <Footer variant="game" />
        </Container>
      </footer>
    </div>
  )
}

export default GamePageLayout
