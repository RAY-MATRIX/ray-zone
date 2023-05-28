const CardPreview = ({ card }) => {
  return (
    <div class="card-preview">
      <div class="game-board__content">
        <div class="card-body">
          <div class="card card--flipped">
            <div class="card__face card__face--back">
              <div class="card__content">
                <h4>{card.title}</h4>
                <p>{card.content}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPreview;
