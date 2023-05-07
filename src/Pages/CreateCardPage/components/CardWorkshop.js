import { useState } from 'react';

const CardWorkshop = () => {
  const [card, setCard] = useState({ title: '', content: '' });
  const [isSaving, setIsSaving] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    if (isSaving) {
      return; // Don't save if already saving
    }
    setIsSaving(true);
    alert(JSON.stringify(card));
  };

  const handleInputChange = (event) => {
    setCard({ ...card, [event.target.name]: event.target.value });
  };

  console.log('new card', card);
  return (
    <>
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

      <form>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            onChange={handleInputChange}
            value={card.title}
          />
        </div>
        <div>
          <label>Content:</label>
          <input
            type="text"
            name="content"
            onChange={handleInputChange}
            value={card.content}
          />
        </div>

        <button type="submit" onClick={submitForm}>
          {isSaving ? 'Saving...' : 'Save'}
        </button>
      </form>
    </>
  );
};

export default CardWorkshop;
