import { useState } from 'react';
import NameForm from './components/NameForm';
import { styled } from '@mui/material/styles';
import { Box, Button } from '@mui/material';
import GameCreateBoard from './components/GameCreateBoard';
// import CardsStock from '../../components/CardsStock';
import { useSelector } from 'react-redux';
import CardsSelection from './components/CardSelection';

const Container = styled(Box)({
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  padding: '30px 0',
  maxWidth: 'calc(100vw - 40px)',
  margin: '0 auto',
  '&.name-container': {
    maxWidth: '600px',
    justifyContent: 'center',
  },
});

const BackButton = styled(Button)({
  width: 'fit-content',
  color: '#fff',
});

const GameTitle = styled('h2')({
  color: '#fff',
});

const CreateGamePage = () => {
  const [stage, setStage] = useState(0);
  const { gameName, gameLink } = useSelector((state) => state.game);
  console.log({ gameName, gameLink });

  const handleNext = () => {
    setStage(stage + 1);
  };
  const handlePrev = () => {
    setStage(stage - 1);
  };
  return (
    <Container>
      {stage === 0 && (
        <Container className="name-container">
          <NameForm updateStage={handleNext} />
        </Container>
      )}
      {stage === 1 && (
        <>
          <BackButton onClick={handlePrev}>back</BackButton>
          <GameTitle>Game Name:{gameName}</GameTitle>
          <Container className="board">
            <CardsSelection updateStage={handleNext} />
          </Container>
        </>
      )}
      {stage === 2 && (
        <>
          <BackButton onClick={handlePrev}>back</BackButton>
          <GameTitle>Game Name:{gameName}</GameTitle>
          <Container className="board">
            <GameCreateBoard updateStage={handleNext} />
          </Container>
        </>
      )}
      {stage === 3 && (
        <div>
          Your game has been created! Share this link with others:{' '}
          <a href={gameLink}>{gameLink}</a>
        </div>
      )}
    </Container>
  );
};
export default CreateGamePage;
