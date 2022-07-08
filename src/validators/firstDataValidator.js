import Joi from "joi";

const firstDataSchema = Joi.object({
  dni: Joi.string()
    .required()
    .regex(new RegExp(/^[0-9]+$/i))
    .messages({
      "string.pattern.base": "Sólo debe contener números",
    }),
  names: Joi.string()
    .required()
    .regex(new RegExp(/^[^·/$%&|<>!"*_'`.,¿?1234567890]*$/))
    .min(2)
    .max(30)
    .messages({
      "string.pattern.base": "Sólo debe contener letras",
    }),
  surnames: Joi.string()
    .required()
    .regex(new RegExp(/^[^·/$%&|<>!"*_'`.,¿?1234567890]*$/))
    .min(2)
    .max(30)
    .messages({
      "string.pattern.base": "Sólo debe contener letras",
    }),
  birthdate: Joi.date().required().messages({
    "date.base": "fecha invalida",
    "date.empty": "campo obligatorio",
    "any.required": "Campo invalido",
  }),
}).messages({
  "any.required": "Campo invalido",
  "string.empty": "Campo obligatorio",
  "object.base": "Campo obligatorio",
  "any.invalid": "Campo invalido",
});
export default firstDataSchema;
