import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Button } from '@mui/material';

const CardContainer = styled(Box)({
  width: '20%',
  minHeight: '240px',
  display: 'flex',
  flexDirection: 'column',
  rowGap: '20px',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px',
  boxShadow: '#ffcece 0px 0 10px',
  '&.card--selected': {
    boxShadow: '#f16a71dd 0px 0 10px',
  },
});

const CardListed = ({ card, cardsSelected, setCardsSelected }) => {
  const itemIndex = cardsSelected.some((item) => item.id === card.id);
  let initialWeight = 0;
  // if card has been stored in game
  if (itemIndex) {
    console.log('exist');
    initialWeight = cardsSelected.find((item) => item.id === card.id).weight;
  }
  const [selected, setSelected] = useState(itemIndex);
  const [weight, setWeight] = useState(initialWeight);

  const handleClick = (event) => {
    if (event.target.tagName !== 'INPUT') {
      setSelected(!selected);
      setWeight(0);
    }
  };

  const updateCardsSelected = () => {
    if (!weight) {
      const newCards = cardsSelected.filter((item) => item.id !== card.id);
      setCardsSelected(newCards);
      console.log('delete exist');
    } else if (itemIndex) {
      const newCards = cardsSelected.map((item) =>
        item.id === card.id ? { ...item, weight: weight } : item
      );
      setCardsSelected(newCards);
      console.log('update exist');
    } else {
      const newCards = cardsSelected.concat({ id: card.id, weight: weight });
      setCardsSelected(newCards);
      console.log('add new card');
    }
  };
  const handleChange = (e) => {
    setWeight(e.target.value);
  };

  useEffect(() => {
    updateCardsSelected();
  }, [weight, selected]);

  const flipClass = selected ? 'card--selected' : '';

  return (
    <CardContainer className={`card ${flipClass}`} onClick={handleClick}>
      <div></div>
      <div>{card.title}</div>
      <div>{card.content}</div>

      <input hidden value={card.id} readOnly />
      {selected && (
        <input
          name=""
          type="number"
          placeholder="card weight"
          value={weight}
          onChange={handleChange}
        />
      )}
    </CardContainer>
  );
};
export default CardListed;
