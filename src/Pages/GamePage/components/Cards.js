import { useEffect, useState } from "react";

const Cards = (props) => {
  const { status, updateChances, chance } = props;

  const allCardPool = [
    { name: "Tiny Wish", content: "5 Minutes Massage" },
    { name: "Small Wish", content: "10 Minutes Massage" },
    { name: "Small Wish", content: "15 Minutes Massage" },
    { name: "Small Wish", content: "20 Minutes Massage" },
    { name: "Big Wish", content: "leg Massage x 0.5 hour x 2" },
    { name: "Big Wish", content: "Jellycat x 2" },
    { name: "Big Wish", content: "head Massage x 0.5 hour x 2" },
    { name: "Gift", content: "Anything worth up to $500" },
    { name: "Super Big Wish", content: "Anything worth up to $1000" },
    { name: "Untimate JackPot", content: "A Real Wish in 2023" },
    { name: "Double Reward", content: "Next Wish x 2" },
  ];
  const [cards, setCards] = useState(allCardPool);
  const [currentCard, setCurrentCard] = useState({
    name: "",
    flip: false,
    content: "",
  });
  const [pickedCards, setPickedCards] = useState([]);
  const [showPickedCards, setShowPickedCards] = useState(false);

  // flip a random card and update rest card pool
  function pickCard() {
    const tempCards = cards;
    const cardPicked = tempCards.splice(
      Math.floor(Math.random() * tempCards.length),
      1
    );
    const cardPickedStatus = {
      name: cardPicked[0].name,
      flip: true,
      content: cardPicked[0].content,
    };
    updateChances();
    setCards(tempCards);
    setCurrentCard(cardPickedStatus);
  }

  // trigger when a card is flipped
  // work if card not flipped yet and the game is running
  const onClickCard = () => {
    if (!currentCard.flip && status) {
      pickCard();
    }
  };

  // single card content
  const generateCard = (newCard) => {
    const flipClass = newCard.flip && status ? "card--flipped" : "";
    return (
      <div className={`card ${flipClass}`} onClick={onClickCard}>
        <div className="card__face card__face--front"></div>
        <div className="card__face card__face--back">
          <div className="card__content">
            <h4>{currentCard.name}</h4>
            <p>{currentCard.content}</p>
          </div>
        </div>
      </div>
    );
  };

  const nextCardClick = () => {
    setCurrentCard({
      ...currentCard,
      name: "",
      flip: false,
      content: "",
    });
  };

  useEffect(() => {
    if (currentCard.name) {
      setPickedCards([...pickedCards, currentCard]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCard]);

  useEffect(() => {
    // reset cards when game reset
    if (!status) {
      setCurrentCard({ ...currentCard, name: "", flip: false, content: "" });
      setCards(allCardPool);
      setPickedCards([]);
      setShowPickedCards(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  const pickedCardsList = pickedCards?.map((pickedCard, index) => (
    <div className="card-list__picked" key={index}>
      <h6>{pickedCard.name}</h6>
      <p>{pickedCard.content}</p>
    </div>
  ));

  return (
    <div className="game-board__content">
      <div className={`card-body ${showPickedCards ? "card-list" : ""}`}>
        {showPickedCards ? <span>Happy Birthday, Darling!!! </span> : ""}
        {showPickedCards ? pickedCardsList : generateCard(currentCard)}
      </div>

      <button
        onClick={nextCardClick}
        className="card-stats__button"
        type="button"
        disabled={!currentCard.flip || chance <= 0 || !status}
      >
        Next Card
      </button>
      <button
        onClick={() => setShowPickedCards(true)}
        className="card-stats__button"
        type="button"
        disabled={!currentCard.flip || chance > 0 || showPickedCards}
      >
        Check My Wish
      </button>
    </div>
  );
};

export default Cards;
