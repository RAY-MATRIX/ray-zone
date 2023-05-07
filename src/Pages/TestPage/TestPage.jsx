import GameSetting from './GameSetting';
import { useState } from 'react';
import * as Joi from 'joi';
const availableCards = [
  { id: 1, name: 'Card 1' },
  { id: 2, name: 'Card 2' },
  { id: 3, name: 'Card 3' },
  { id: 4, name: 'Card 4' },
  { id: 5, name: 'Card 5' },
];

const selectedCards = [
  { id: 2, name: 'Card 2', weight: 3 },
  { id: 4, name: 'Card 4', weight: 2 },
];

const onSave = (gameData) => {
  console.log('Saving game data:', gameData);
  // Perform save operation here, e.g. call API endpoint, dispatch Redux action, etc.
};

const validationSchema = Joi.object({
  drawNumber: Joi.number().min(1).max(10).required(),
  selectedCards: Joi.array()
    .items(
      Joi.object({
        id: Joi.number().required(),
        name: Joi.string().required(),
        weight: Joi.number().min(1).max(5).required(),
      })
    )
    .required(),
});

const initialValues = {
  drawNumber: 5,
  selectedCards: selectedCards,
  availableCards: availableCards,
};

const TestPage = () => {
  const [formError, setFormError] = useState(null);

  const onSubmit = (values) => {
    const { error } = validationSchema.validate(values);
    if (error) {
      setFormError(error.message);
      return;
    }
    setFormError(null);
    onSave(values);
  };

  return (
    <div>
      <h1>Game Settings</h1>
      {formError && <div>{formError}</div>}
      <GameSetting initialValues={initialValues} onSubmit={onSubmit} />
    </div>
  );
};
export default TestPage;
