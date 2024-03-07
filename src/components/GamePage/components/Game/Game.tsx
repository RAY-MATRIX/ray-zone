'use client'

import { FC, useEffect, useState } from 'react'
import Button from '@/components/Button'
import Cards from '../Cards'

interface Props {
  initialChance: number
}
const Game: FC<Props> = ({ initialChance }) => {
  const [gameStatus, setGameStatus] = useState<boolean>(false)
  const [chance, setChance] = useState<number>(initialChance)

  useEffect(() => {
    if (!gameStatus) {
      setChance(initialChance)
    }
  }, [gameStatus])

  return (
    <div>
      <div className="flex justify-between w-[90vw] max-w-[400px] mx-auto items-center pt-3 px-4">
        <div className="flex gap-2 text-white">
          <div>Cards Left:</div>
          <div>{chance}</div>
        </div>
        <Button
          onClick={() => {
            setGameStatus(!gameStatus)
          }}
          variant="primary"
          size="large">
          {gameStatus ? 'Reset Game' : 'Start Game'}
        </Button>
      </div>

      <div className="grid mx-auto gap-4 w-[90vw] h-[125vw] max-w-[400px] max-h-[600px] text-center">
        <Cards
          gameStatus={gameStatus}
          updateChance={() => setChance(chance - 1)}
          chance={chance}
        />
      </div>
    </div>
  )
}

export default Game
