import { useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import { Box, Button } from '@mui/material';
import { extractIdFromURL } from '../../utils/common';
import { useGetUserGamesQuery } from '../../store/api/userApi';

const Container = styled(Box)({
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  padding: '30px 0',
  maxWidth: 'calc(100vw - 40px)',
  margin: '0 auto',
});

const GamesPage = () => {
  const currentUserId = useSelector((state) => state.auth.userId);
  const userId = extractIdFromURL(window.location.pathname)
    ? extractIdFromURL(window.location.pathname)
    : currentUserId;
  const { data: games, isLoading } = useGetUserGamesQuery(userId);
  console.log('games', games);
  return (
    <Container className="game">
      <h1 className="game-title">Games</h1>
      <p>
        You dont have any games yet, <a href="/games/create">create a game now</a>
      </p>
      <ul>
        {/* {games.map((g, key) => {
          return <div>{g}</div>;
        })} */}
      </ul>
    </Container>
  );
};
export default GamesPage;
