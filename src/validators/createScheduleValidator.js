import Joi from "joi";

const createScheduleSchema = Joi.object({
  currentDate: Joi.date().greater(Date.now()).required(),
  id_block: Joi.string().required(),
}).messages({
  "any.required": "Campo invalido",
  "string.empty": "Campo obligatorio",
  "object.base": "Campo obligatorio",
  "any.invalid": "Campo invalido",
  "date.base": "fecha invalida",
  "date.greater" : "fecha no puede ser menor a actual"
});
export default createScheduleSchema;