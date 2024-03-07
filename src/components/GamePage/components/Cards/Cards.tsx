import { useEffect, useState, FC } from 'react'
import classNames from 'classnames'
import useSWR from 'swr'
import fetcher from '@/utils/fetcher'
import Button from '@/components/Button'
import PickedCard from './components/PickedCard'
import GeneratedCards from './components/GeneratedCards'
import Loading from '@/components/Loading'

export interface CardsProps {
  gameStatus: boolean
  updateChance: () => void
  chance: number
}

export interface Card {
  id: string
  name: string
  content: string
}

export interface CurrentCard extends Card {
  flip: boolean
}

export interface Result {
  data: Card[]
}

const Cards: FC<CardsProps> = ({ gameStatus, updateChance, chance }) => {
  const [currentCard, setCurrentCard] = useState<CurrentCard>({
    id: '',
    name: '',
    content: '',
    flip: false,
  })
  const [cards, setCards] = useState<Card[]>([])
  const [pickedCards, setPickedCards] = useState<Card[]>([])
  const [showPickedCards, setShowPickedCards] = useState<boolean>(false)
  const { data, isLoading } = useSWR(`/api/wishes`, fetcher<Result>)

  useEffect(() => {
    if (currentCard.flip) {
      setPickedCards([...pickedCards, currentCard])
    }
  }, [currentCard])

  useEffect(() => {
    // reset cards when game reset
    if (!gameStatus) {
      setCurrentCard({ ...currentCard, name: '', content: '', flip: false })
      setPickedCards([])
      setShowPickedCards(false)
      if (data) {
        const { data: result } = data
        shuffle(result.data)
      }
    }
  }, [gameStatus])

  useEffect(() => {
    if (data) {
      const { data: result } = data
      shuffle(result.data)
    }
  }, [data])

  // shuffle cards when game reset
  const shuffle = (originalCards: Card[]) => {
    const tempCards = [...originalCards]
    for (let i = tempCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const temp = tempCards[j]
      tempCards[j] = tempCards[i]
      tempCards[i] = temp
    }
    setCards(tempCards)
  }

  if (isLoading) {
    return <Loading />
  }
  if (!data) {
    return <div>No data loaded</div>
  }

  const pickedCardsList = pickedCards.map((pickedCard, index) => (
    <PickedCard key={index} pickedCard={pickedCard} />
  ))

  return (
    <div className="text-center pt-6 pb-4 px-4">
      <div
        className={classNames(showPickedCards && ['flex', 'flex-col'])}
        style={{ height: 'calc(100% - 80px)' }}>
        {showPickedCards ? (
          pickedCardsList
        ) : (
          <GeneratedCards
            currentCard={currentCard}
            cards={cards}
            updateChance={updateChance}
            setCurrentCard={setCurrentCard}
            gameStatus={gameStatus}
            setCards={setCards}
          />
        )}
      </div>
      {gameStatus && (
        <div className="mt-8">
          {chance !== 0 ? (
            <Button
              onClick={() =>
                setCurrentCard({
                  ...currentCard,
                  flip: false,
                })
              }
              variant="primary"
              size="large"
              disabled={!currentCard.flip || chance <= 0 || !gameStatus}>
              Next Card
            </Button>
          ) : (
            <Button
              onClick={() => setShowPickedCards(true)}
              variant="primary"
              size="large"
              disabled={!currentCard.flip || chance > 0 || showPickedCards}>
              Check My Wish
            </Button>
          )}
        </div>
      )}
    </div>
  )
}

export default Cards
