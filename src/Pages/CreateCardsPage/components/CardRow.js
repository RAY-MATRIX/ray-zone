import { useEffect, useState } from 'react';

const CardRow = ({ cardStored, removeCard, updateCards }) => {
  const [card, setCard] = useState(cardStored);
  const [isSavingCard, setIsSavingCard] = useState(false);
  const delayTime = 500;

  const handleInputChange = (event) => {
    setCard({ ...card, [event.target.name]: event.target.value });
    setIsSavingCard(true);
  };

  useEffect(() => {
    let timer;
    if (isSavingCard) {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        updateCards(card);
        setIsSavingCard(false);
      }, delayTime);
    }
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [isSavingCard, card]);

  return (
    <>
      <td>
        <input
          type="text"
          name="title"
          onChange={handleInputChange}
          value={card.title}
        />
      </td>
      <td>
        <input
          type="text"
          name="content"
          onChange={handleInputChange}
          value={card.content}
        />
      </td>
      <td>
        <input
          type="number"
          name="probability"
          onChange={handleInputChange}
          value={card.probability}
        />
      </td>
      <td>
        <button type="button" onClick={() => removeCard(card.id)}>
          Remove
        </button>
      </td>
    </>
  );
};

export default CardRow;
