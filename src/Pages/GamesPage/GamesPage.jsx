import { styled } from '@mui/material/styles';
import { Box, Button } from '@mui/material';
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
  return (
    <Container className="game">
      <h1 className="game-title">Games</h1>
      <p>
        You dont have any games yet, <a href="/games/create">create a game now</a>
      </p>
    </Container>
  );
};
export default GamesPage;
