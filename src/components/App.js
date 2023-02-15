import Game from "./Game";
import "../css/style.scss";

function App() {
  const year = new Date().getFullYear();
  return (
    <div className="game">
      <h1 className="game-title">Wish Cards</h1>
      <Game chances={5} />
      <div className="copyright">
        Copyright © {year} <br /> Designed for Ashely Zheng
      </div>
    </div>
  );
}

export default App;
