import Game from './components/Game';
import { Navigate, useParams } from 'react-router-dom';
import Loading from '../../components/ui/Loading';
import { useGetGameInfoQuery } from '../../store/api/gameApi';

const GamePage = () => {
  let params = useParams();
  const gameId = params.id;
  const { data: game, isLoading } = useGetGameInfoQuery(gameId);
  if (isLoading) return <Loading />;

  return (
    <div className="game">
      {game ? (
        <>
          <h1 className="game-title">Wish Game</h1>
          {/* <Game
        chances={5}
        gameData={game}
      /> */}
        </>
      ) : (
        <>Oops, This Game does not exist</>
      )}
    </div>
  );
};
export default GamePage;
