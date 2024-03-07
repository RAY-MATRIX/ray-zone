import { FC } from 'react'
import Container from '@/components/Container'
import Game from './components/Game'

const GamePage: FC = () => {
  return (
    <Container>
      <h1 className="text-2xl text-center pt-4 mb-1 text-white mt-4">
        Wish Cards
      </h1>
      <div className="mb-1">
        <h3 className="text-center text-white">
          Instruction: - Just Flip the Card
        </h3>
      </div>
      <Game initialChance={5} />
    </Container>
  )
}
export default GamePage
