import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cardsSaved, resetState } from '../../../store/cards/cardsSlice';
import CardRow from './CardRow';

const CardForm = () => {
  const initialCards = useSelector((state) => state.cards);
  const [cards, setCards] = useState(initialCards);
  const [latestId, setLatestId] = useState(cards.length);
  const dispatch = useDispatch();

  const addCard = () => {
    setCards([
      ...cards,
      { id: latestId, title: '', content: '', probability: 0 },
    ]);
    setLatestId(latestId + 1);
  };

  const removeCard = (cardId) => {
    const updatedCards = cards.filter((i) => i.id !== cardId);
    setCards(updatedCards);
  };

  const updateCards = (card) => {
    const updatedCards = cards.map((item) => {
      if (item.id === card.id) {
        return card;
      }
      return item;
    });
    setCards(updatedCards);
  };

  const submitForm = (e) => {
    e.preventDefault();
    alert(JSON.stringify(cards));
    dispatch(cardsSaved(cards));
    console.log('save');
  };

  const resetForm = (e) => {
    console.log('reset');
    dispatch(resetState());
  };

  console.log('all cards', cards);
  return (
    <>
      <form>
        <table>
          <thead>
            <tr>
              <th>title</th>
              <th>content</th>
              <th>probability</th>
            </tr>
          </thead>

          <tbody>
            {cards.map((item) => (
              <tr key={item.id}>
                <CardRow
                  cardStored={item}
                  removeCard={removeCard}
                  updateCards={updateCards}
                />
              </tr>
            ))}
          </tbody>
        </table>

        <button type="button" onClick={addCard}>
          Add
        </button>
        <button type="submit" onClick={submitForm}>
          Submit
        </button>
        <button type="button" onClick={resetForm}>
          reset
        </button>
      </form>
    </>
  );
};

export default CardForm;
