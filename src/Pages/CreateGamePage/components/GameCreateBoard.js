import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardListed from './CardListed';
import { styled } from '@mui/material/styles';
import { Box, Button } from '@mui/material';
import { gameCardsUpdate } from '../../../store/game/gameSlice';

const CardListContainer = styled(Box)({
  textAlign: 'center',
  display: 'flex',
  width: '100%',
  padding: '40px 0',
  gap: '20px',
});

const GameCreateBoard = () => {
  const cardStored = useSelector((state) => state.cards);
  const gameCardsSelected = useSelector((state) => state.game.cardsSelected);
  const [cardsSelected, setCardsSelected] = useState(gameCardsSelected);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(gameCardsUpdate(cardsSelected));
    console.log('save');
  };

  console.log('cards in game', cardsSelected);
  return (
    <>
      <p>pick a card and add to game</p>

      {cardStored.length === 0 && (
        <div>
          There is no cards, <a href="/card/create">add a card now </a>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <CardListContainer>
          {cardStored.map((card) => {
            return (
              <CardListed
                card={card}
                key={card.id}
                cardsSelected={cardsSelected}
                setCardsSelected={setCardsSelected}
              />
            );
          })}
        </CardListContainer>
        <Button type="submit">Save</Button>
      </form>
    </>
  );
};
export default GameCreateBoard;
