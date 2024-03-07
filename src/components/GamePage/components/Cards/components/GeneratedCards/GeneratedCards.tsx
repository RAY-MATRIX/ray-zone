import { FC } from 'react'
import classNames from 'classnames'
import { Card, CurrentCard } from '../../Cards'
import CardFace from '../CardFace'

// method 1:
// shuffle cards first
// shift one & update cards
// method 2(picked):
// randomly pick one
// update cards

interface Props {
  currentCard: CurrentCard
  cards: Card[]
  updateChance: () => void
  setCurrentCard: (card: CurrentCard) => void
  setCards: (cards: Card[]) => void
  gameStatus: boolean
}
const GeneratedCards: FC<Props> = ({
  currentCard,
  cards,
  updateChance,
  setCurrentCard,
  setCards,
  gameStatus,
}) => {
  // flip a random card and update rest card pool
  function pickCard() {
    const tempCards = [...cards]
    const cardPicked = tempCards.pop()
    if (cardPicked) {
      const cardPickedStatus = {
        ...cardPicked,
        flip: true,
      }
      updateChance()
      setCards(tempCards)
      setCurrentCard(cardPickedStatus)
    }
  }
  const flipClass = currentCard.flip && gameStatus ? 'card--flipped' : ''

  return (
    <div
      className={classNames(
        [
          'relative',
          'transition-transform',
          'duration-500',
          'cursor-pointer',
          'h-full',
          'rounded',
          'scale-100',
          'shadow-xl',
          'transform-style-3d',
        ],
        flipClass === 'card--flipped' && ['rotate-y-180']
      )}
      onClick={() => {
        if (!currentCard.flip && gameStatus) {
          pickCard()
        }
      }}>
      <CardFace variant="front" />
      <CardFace variant="back">
        <div className="card__content">
          <h4 className="text-2xl pb-2 font-bold">{currentCard.name}</h4>
          <p>{currentCard.content}</p>
        </div>
      </CardFace>
    </div>
  )
}

export default GeneratedCards
