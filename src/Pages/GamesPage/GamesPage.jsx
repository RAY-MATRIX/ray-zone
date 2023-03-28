const GamesPage = () => {
  return (
    <div className="game">
      <h1 className="game-title">Games</h1>
      <p>
        You dont have any games yet,{' '}
        <a href="/games/create">create a game now</a>
      </p>
    </div>
  );
};
export default GamesPage;
