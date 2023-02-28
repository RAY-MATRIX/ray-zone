import Game from './components/Game';

const GamePage = () => {
  return (
    <div className="game">
      <h1 className="game-title">Wish Cards</h1>
      <Game chances={5} />
    </div>
  );
};
export default GamePage;
