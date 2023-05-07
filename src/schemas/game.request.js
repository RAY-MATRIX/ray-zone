import Joi from 'joi';

const baseSchema = {
  name: Joi.string().required(),
};

export const gameNameSchema = Joi.object({
  ...baseSchema,
});

export const gameSettingSchema = Joi.object({
  quantity: Joi.number().integer().min(1).required(),
  rarity: Joi.number().integer().min(1).max(100).required(),
  draws: Joi.number().integer().min(1).required(),
});
