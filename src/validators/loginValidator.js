import Joi from "joi";

const loginValidatorSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
}).messages({
  "any.required": "Campo invalido",
  "string.empty": "Campo obligatorio",
  "object.base": "Campo obligatorio",
  "any.invalid": "Campo invalido",
});
export default loginValidatorSchema;
