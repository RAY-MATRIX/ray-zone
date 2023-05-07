import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Cards = (props) => {
  const { status, updateChances, chance } = props;

  const allCardPool = useSelector((state) => state.cards);
  // const allCardPool = [
  //   { name: 'Tiny Wish', content: '5 Minutes Massage' },
  //   { name: 'Small Wish', content: '10 Minutes Massage' },
  //   { name: 'Small Wish', content: '15 Minutes Massage' },
  //   { name: 'Small Wish', content: '20 Minutes Massage' },
  //   { name: 'Big Wish', content: 'leg Massage x 0.5 hour x 2' },
  //   { name: 'Big Wish', content: 'Jellycat x 2' },
  //   { name: 'Big Wish', content: 'head Massage x 0.5 hour x 2' },
  //   { name: 'Gift', content: 'Anything worth up to $500' },
  //   { name: 'Super Big Wish', content: 'Anything worth up to $1000' },
  //   { name: 'Untimate JackPot', content: 'A Real Wish in 2023' },
  //   { name: 'Double Reward', content: 'Next Wish x 2' },
  // ];
  const [cards, setCards] = useState(allCardPool);
  const [currentCard, setCurrentCard] = useState({
    title: '',
    flip: false,
    content: '',
  });
  const [pickedCards, setPickedCards] = useState([]);
  const [showPickedCards, setShowPickedCards] = useState(false);

  const myCards = useSelector((state) => state.cards);

  // flip a random card and update rest card pool
  function pickCard() {
    const tempCards = cards;
    const cardPicked = tempCards.splice(
      Math.floor(Math.random() * tempCards.length),
      1
    );
    const cardPickedStatus = {
      title: cardPicked[0].title,
      flip: true,
      content: cardPicked[0].content,
    };
    updateChances();
    setCards(tempCards);
    setCurrentCard(cardPickedStatus);
  }

  // function shuffle(cards) {
  //   let cardPool = [];
  //   for (let i = 0; i < cards.length; i++) {
  //     for (let j = 0; j < cards[i].quantity; j++) {
  //       cardPool.push(cards[i]);
  //     }
  //   }

  //   for (let i = cardPool.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [cardPool[i], cardPool[j]] = [cardPool[j], cardPool[i]];
  //   }
  // }

  function pickName(namesWithWeights) {
    const totalWeight = namesWithWeights.reduce(
      (acc, { weight }) => acc + weight,
      0
    );
    const randNum = Math.random() * totalWeight;
    let weightSum = 0;
    for (let j = 0; j < namesWithWeights.length; j++) {
      weightSum += namesWithWeights[j].weight;
      if (randNum < weightSum) {
        const pickedName = namesWithWeights[j].name;
        namesWithWeights.splice(j, 1);
        return pickedName;
      }
    }

    return null; // no name was picked
  }

  const namesWithWeights = [
    { name: 'John', weight: 1 },
    { name: 'Sarah', weight: 2 },
    { name: 'Michael', weight: 3 },
    { name: 'Emily', weight: 2 },
    { name: 'David', weight: 1 },
  ];

  const pickedName = pickName(namesWithWeights);
  console.log(`Name picked: ${pickedName}`);

  // Remove the last picked name from the array in the next round
  namesWithWeights.splice(
    namesWithWeights.findIndex((item) => item.name === pickedName),
    1
  );

  // trigger when a card is flipped
  // work if card not flipped yet and the game is running
  const onClickCard = () => {
    if (!currentCard.flip && status) {
      pickCard();
    }
  };

  // single card content
  const generateCard = (newCard) => {
    const flipClass = newCard.flip && status ? 'card--flipped' : '';
    return (
      <div className={`card ${flipClass}`} onClick={onClickCard}>
        <div className="card__face card__face--front"></div>
        <div className="card__face card__face--back">
          <div className="card__content">
            <h4>{currentCard.title}</h4>
            <p>{currentCard.content}</p>
          </div>
        </div>
      </div>
    );
  };

  const nextCardClick = () => {
    setCurrentCard({
      ...currentCard,
      title: '',
      flip: false,
      content: '',
    });
  };

  useEffect(() => {
    if (currentCard.title) {
      setPickedCards([...pickedCards, currentCard]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCard]);

  useEffect(() => {
    // reset cards when game reset
    if (!status) {
      setCurrentCard({ ...currentCard, title: '', flip: false, content: '' });
      setCards(allCardPool);
      setPickedCards([]);
      setShowPickedCards(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  const pickedCardsList = pickedCards?.map((pickedCard, index) => (
    <div className="card-list__picked" key={index}>
      <h6>{pickedCard.title}</h6>
      <p>{pickedCard.content}</p>
    </div>
  ));
  console.log(myCards, 'mycards');
  return (
    <div className="game-board__content">
      <div className={`card-body ${showPickedCards ? 'card-list' : ''}`}>
        {showPickedCards ? <span>Happy Birthday, Darling!!! </span> : ''}
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
