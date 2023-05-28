import Joi from 'joi';

const baseSchema = {
  name: Joi.string().required(),
  title: Joi.string().required(),
};

export const cardSchema = Joi.object({
  ...baseSchema,
});
