import Game from './components/Game';
import { useLocation, Navigate } from 'react-router-dom';
import { extractIdFromURL } from '../../utils/common';
import { DEFAULT_GAME } from '../../utils/contant';

const GamePage = () => {
  const location = useLocation();
  const id = extractIdFromURL(location.pathname)
    ? extractIdFromURL(location.pathname)
    : DEFAULT_GAME;

  // const { data: game, isLoading } = useGetGameInfoQuery(id);
  // if (isLoading) return <Loading />;
  // if (!game) return <Navigate to="/notfound" replace />;

  return (
    <div className="game">
      <h1 className="game-title">Wish Cards</h1>
      <Game
        chances={5}
        // gameData={game}
      />
    </div>
  );
};
export default GamePage;
