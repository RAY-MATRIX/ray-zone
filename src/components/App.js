import Game from "./Game";
import "../css/style.scss";

function App() {
  return (
    <div className="game">
      <h1 className="game-title">Wish Cards</h1>
      <Game chances={5} />
      <div className="copyright">
        Copyright © 2022 <br /> Designed for Ashely Zheng
      </div>
    </div>
  );
}

export default App;
