import { useSelector, useDispatch } from 'react-redux';
import CardList from './CardList';
import { styled } from '@mui/material/styles';
import { Box, Button } from '@mui/material';
import { selectCard, unselectCard } from '../../../store/game/gameSlice';

const CardListContainer = styled(Box)({
  display: 'flex',
  width: '100%',
  padding: '40px 0',
  flexWrap: 'wrap',
});
const NextButton = styled(Button)({
  color: '#fff',
  marginTop: '20px',
  border: '1px solid transparent',
  '&:hover': {
    borderColor: 'inherit',
  },
});
const EmptyCardContainer = styled('div')(({ theme }) => ({
  width: '25%',
  height: '35vw',
  maxHeight: '330px',
  padding: '10px',
  '& a': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    border: '1px dashed red',
    height: '100%',
    padding: '5px',
    fontSize: '1.5rem',
    backgroundColor: `${theme.palette.dark.main}`,
    textDecoration: 'none',
    textTransform: 'capitalize',
    boxShadow: '#816c96 0px 0 10px',
    borderRadius: '5px',
    '& span': {
      color: `${theme.palette.white.main}`,
      display: 'block',
      maxWidth: '150px',
      margin: '0 auto',
    },
  },
}));

const CardsSelection = ({ updateStage }) => {
  const dispatch = useDispatch();
  const availableCards = useSelector((state) => state.cards);
  const selectedCards = useSelector((state) => state.game.gameCardsSelected);

  const handleCardClick = (card) => {
    const isSelected = selectedCards.some((item) => item.id === card.id);
    if (isSelected) {
      // Remove the card from the selected cards
      dispatch(unselectCard(card));
    } else {
      // Add the card to the selected cards
      dispatch(selectCard(card));
    }
  };

  const handleNextClick = () => {
    // Check if at least one card is selected
    if (selectedCards.length > 0) {
      updateStage();
    } else {
      alert('Please select at least one card');
    }
  };
  console.log('cards available', availableCards);
  console.log('cards selected', selectedCards);
  const isNextButtonDisabled = selectedCards.length === 0;

  return (
    <>
      <p>Select cards for your game</p>
      {availableCards.length === 0 && (
        <div>
          There is no cards, <a href="/card/create">add a card now </a>
        </div>
      )}

      <CardListContainer>
        {availableCards.map((card) => {
          return (
            <CardList
              card={card}
              key={card.id}
              handleCardClick={handleCardClick}
              selectedCards={selectedCards}
            />
          );
        })}
        <EmptyCardContainer>
          <a href="/cards/create">
            <span>create a new card now</span>{' '}
          </a>
        </EmptyCardContainer>
      </CardListContainer>

      <NextButton disabled={isNextButtonDisabled} onClick={handleNextClick}>
        Next
      </NextButton>
    </>
  );
};

export default CardsSelection;
