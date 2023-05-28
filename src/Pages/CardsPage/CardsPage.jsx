import { useSelector } from 'react-redux';
import { useGetUserCardsQuery } from '../../store/api/userApi';
import Loading from '../../components/ui/Loading';
import SingleCard from '../../components/SingleCard/SingleCard';
import { styled } from '@mui/material/styles';
import { Box, Container } from '@mui/material';

const CardListContainer = styled(Box)({
  display: 'flex',
  width: '100%',
  padding: '40px 0',
  flexWrap: 'wrap',
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

const CardsPage = () => {
  const currentUserId = useSelector((state) => state.auth.userId);
  const { data: cards, isLoading } =
    useGetUserCardsQuery(currentUserId);
  console.log('cards', cards);

  if (isLoading) return <Loading />;
  // if (!cards) return <Loading />;

  return (
    <Container>
      <h1 className="game-title">Cards</h1>
      {!cards ? (
        <p>
          You dont have any cards yet,{' '}
          <a href="/cards/create">create a card now</a>
        </p>
      ) : (
        <CardListContainer>
          {cards.data.cardsCreated.map((card, key) => {
            return <SingleCard card={card} key={card.id} />;
          })}
          <EmptyCardContainer>
            <a href="/cards/create">
              <span>create a new card now</span>{' '}
            </a>
          </EmptyCardContainer>
        </CardListContainer>
      )}
    </Container>
  );
};
export default CardsPage;
