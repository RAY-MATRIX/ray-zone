import { useState } from 'react';
import NameForm from './components/NameForm';
import { styled } from '@mui/material/styles';
import { Box, Button } from '@mui/material';
import GameCreateBoard from './components/GameCreateBoard';
// import CardsStock from '../../components/CardsStock';
import { useSelector } from 'react-redux';

const Container = styled(Box)({
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  padding: '30px 0',
});
const BackButton = styled(Button)({
  width: 'fit-content',
  color: '#fff',
});

const CreateGamePage = () => {
  const [stage, setStage] = useState(0);
  const gameName = useSelector((state) => state.game.title);

  return (
    <Container>
      {stage === 0 && (
        <Container>
          <NameForm updateStage={() => setStage(1)} />
        </Container>
      )}

      {stage === 1 && (
        <>
          <BackButton onClick={() => setStage(0)}>back</BackButton>
          <h2>Name:{gameName}</h2>
          <Container className="board">
            <GameCreateBoard />
          </Container>
        </>
      )}
    </Container>
  );
};
export default CreateGamePage;
