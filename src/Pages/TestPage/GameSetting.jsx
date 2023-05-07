import React from 'react';
import { useFormik } from 'formik';
import Joi from 'joi';

const validationSchema = Joi.object({
  drawNumber: Joi.number().required(),
});

const GameSetting = ({ availableCards, selectedCards, onSave }) => {
  const initialValues = {
    drawNumber: 1,
    cardWeights: {},
    selectedCards: selectedCards,
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      onSave(values);
    },
  });

  const handleCardWeightChange = (cardId, weight) => {
    formik.setValues({
      ...formik.values,
      cardWeights: {
        ...formik.values.cardWeights,
        [cardId]: weight,
      },
    });
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="drawNumber">Draw Number:</label>
      <input
        id="drawNumber"
        name="drawNumber"
        type="number"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.drawNumber}
      />
      {formik.touched.drawNumber && formik.errors.drawNumber ? (
        <div>{formik.errors.drawNumber}</div>
      ) : null}

      {availableCards.map((card) => (
        <div key={card.id}>
          <label htmlFor={`card-${card.id}`}>
            <input
              id={`card-${card.id}`}
              name={`selectedCards.${card.id}`}
              type="checkbox"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              checked={formik.values.selectedCards[card.id]}
            />
            {card.name}
          </label>
          {formik.values.selectedCards[card.id] && (
            <div>
              <label htmlFor={`weight-${card.id}`}>Weight:</label>
              <input
                id={`weight-${card.id}`}
                name={`cardWeights.${card.id}`}
                type="number"
                onChange={(e) =>
                  handleCardWeightChange(card.id, parseInt(e.target.value))
                }
                onBlur={formik.handleBlur}
                value={formik.values.cardWeights[card.id] || 1}
              />
            </div>
          )}
        </div>
      ))}

      <button type="submit">Save</button>
    </form>
  );
};

export default GameSetting;
