import joi from "joi";

export const login = joi.object({
  phoneNumber: joi.string().min(8).required(),
});

export const importHolerite = joi.object({
  dataComp: joi.string().min(6).required(),
});

export const manager = joi.object({
  createdAt: joi.date(),
  registration: joi.string().min(4).required(),
  nome: joi.string().required(),
  team: joi.array().allow(null),
  fone: joi.string().allow(null),
});

export const question = joi.object({
  question: joi.string().required(),
  createdAt: joi.date().required(),
  updatedAt: joi.date().allow(null),
});

export const employeeForm = joi.object({
  employeeName: joi.string().required(),
  registration: joi.string().required(),
  department: joi.string().required(),
  position: joi.string().required(),
  admissionDate: joi.date().required(),
  nameEvaluator: joi.string().required(),
  registrationEvaluator: joi.string().required(),
  period: joi.number().required(),
  questions: joi
    .array()
    .items({
      questionId: joi.string().required(),
      questionValue: joi.number().allow(null),
      questionValueEvaluator: joi.number().allow(null),
    })
    .required(),
  overallQuantitativeResult: joi.number().required(),
  createdAt: joi.date(),
  updatedAt: joi.date().allow(null),
});
