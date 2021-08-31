import { useEffect, useState ,useRef} from "react";
import Gameboard from './Gameboard';

const Game = () => {
    
    const [status, setStatus] = useState(false);
    const [buttonText, setButtonText]=useState("New Game");
    const [score, setScore] = useState(0);
    const[gameTimer, setGameTimer]= useState(60);
    const timer = useRef(null);
    const childRef = useRef();
    const congrates = "Congratulations, your score is "+ score;

    function buttonClick (){
        console.log("click: "+status);
        childRef.current.renderBoard();
        if(!status){
            startTimer();
            setButtonText("End Game");
        }else{
            stopTimer();
        }
        setStatus(!status);
    }

    function startTimer (){
        console.log("Timer start");
        let barTime = 60;
        timer.current = setInterval(()=>{
            
            barTime -= 1;
            if(barTime <= 0){
                stopTimer();
            }else{
                setGameTimer(barTime);
            }            
        
        }, 1000);
    }

    function stopTimer() {
        console.log("Game over");
        clearInterval(timer.current);
        setStatus(false);
        alert(congrates);
        setButtonText("Start Game");
    }

    function resetGame(){
        // console.log("Timer reset");
        setGameTimer(60);
        setScore(0);
    }
    useEffect(resetGame,[status]);

    const barWidth = Math.round(gameTimer/60*10000)/100+"%"
    const barStyle = {
        width: `${barWidth}`
    };

    function updateScore(){
        setScore(score=>score+=56);
    }

    return(
        <div>
        <div className="game-stats">
            <div className="game-stats__level">
            <div className="game-stats__level--label">Current Level:</div>
            <div className="game-stats__level--value">1</div>
            </div>
            <div className="game-stats__score">
            <div className="game-stats__score--label">Score:</div>
            <div className="game-stats__score--value">{score}</div>
            </div>
            <button onClick={buttonClick} className="game-stats__button" 
            type="button">
                {buttonText}
            </button>
        </div>
        <div className="game-timer">
            <div className="game-timer__bar" style={barStyle}>{gameTimer}s</div>
        </div>
        <Gameboard status={status} ref={childRef} stopTimer={stopTimer} updateScore={updateScore}/>
        </div>  
        
    )
}

export default Game;