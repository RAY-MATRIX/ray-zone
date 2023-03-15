import Joi from 'joi';

const baseSchema = {
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required(),
  password: Joi.string().min(6).max(12).required(),
};

export const loginSchema = Joi.object({
  ...baseSchema,
});

export const registerSchema = Joi.object({
  ...baseSchema,
});

export const retrievePasswordSchema = Joi.object({
  userInput: Joi.string().required(),
});

export const resetPasswordSchema = Joi.object({
  password: Joi.string().min(6).max(12).required(),
  confirmPassword: Joi.string().valid(Joi.ref('password')).required(),
});
