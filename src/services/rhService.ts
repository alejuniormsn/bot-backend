import { ModelStatic, Op } from "sequelize";
import { resp } from "../utils/messages/resp";
import Holerite from "../database/models/Rh/Holerite";
import baseDataHolerite from "../utils/baseDataHolerite";
import Manager from "../database/models/Rh/Manager";
import EmployeeForm from "../database/models/Rh/EmployeeForm";
import Question from "../database/models/Rh/Questions";
import EmployeeFormQuestion from "../database/models/Rh/EmployeeFormQuestion";
import { dateComp } from "../utils/workingWithDates";

interface IImport {
  dataComp: string;
}

export interface IJsonOutput {
  matricula: string;
  nome: string;
  cpf: string;
  totalLiqu: number;
  dataPagto: string;
  dataCompet: string;
  func: string;
  totalVenc: number;
  totalDesc: number;
  salBase: number;
  baseInss: number;
  baseFgts: number;
  fgtsMes: number;
  baseCalcIrf: number;
  createdAt: string;
  description: [
    {
      codOp: number;
      history: string;
      ref: number | null;
      valor: number;
    }
  ];
}

export interface IManager {
  createdAt: Date;
  registration: string;
  nome: string;
  team: Array<JSON> | null;
  fone: string | null;
}

export interface IQuestion {
  id: string;
  question: string;
  createdAt: Date;
  updatedAt: Date;
}

interface IQuestionsForm {
  questionId: string;
  questionValue: number | null;
  questionValueEvaluator: number | null;
}

export interface IEmployeeForm {
  employeeName: string;
  registration: string;
  department: string;
  position: string;
  admissionDate: Date;
  nameEvaluator: string;
  registrationEvaluator: string;
  period: number;
  questions: Array<IQuestionsForm>;
  overallQuantitativeResult: number;
  createdAt: Date;
  updatedAt: Date | null;
}

class rhService {
  private model: ModelStatic<Holerite> = Holerite;
  private modelEmployeeForm: ModelStatic<EmployeeForm> = EmployeeForm;
  private modelEmployeeFormQuestion: ModelStatic<EmployeeFormQuestion> =
    EmployeeFormQuestion;
  private modelManager: ModelStatic<Manager> = Manager;
  private modelQuestion: ModelStatic<Question> = Question;

  async getHolerite(chapa: string, dataComp: string) {
    const holeriteJson = await this.model.findOne({
      where: { matricula: chapa, dataCompet: dataComp },
    });
    if (!holeriteJson) {
      throw new Error("Holerite not found.");
    }
    return resp(200, holeriteJson);
  }

  async postImportHolerite(data: IImport) {
    try {
      const jsonOutput = await baseDataHolerite(data.dataComp);
      const checkImport = [];
      for (const e of jsonOutput) {
        const item = await this.model.findOne({
          where: { cpf: e.cpf, dataCompet: e.dataCompet },
        });
        if (!item) {
          checkImport.push(e);
        }
      }
      const createdHolerite = await this.model.bulkCreate(checkImport);
      if (createdHolerite.length === 0) {
        return resp(404, "Not found");
      }
      return resp(200, createdHolerite);
    } catch (error: any) {
      throw new Error(`Failed to import holerite: ${error.message}`);
    }
  }

  async getManager(chapa: string) {
    const manager = await this.modelManager.findOne({
      where: { registration: { [Op.like]: `%${chapa}` } },
    });
    if (!manager) {
      throw new Error("Manager not found.");
    }
    return resp(200, manager);
  }

  async postManager(manager: IManager) {
    const createdManager = await this.modelManager.create({ ...manager });
    if (!createdManager) {
      throw new Error(`Failed to create manager.`);
    }
    return resp(200, createdManager);
  }

  async putManager(manager: IManager, id: number) {
    const [updateCount] = await this.modelManager.update(manager, {
      where: { id: id },
    });
    if (updateCount === 0) {
      throw new Error(`Failed to update manager`);
    }
    return resp(200, "Manager updated successfully");
  }

  async getQuestion(id: string) {
    const question = await this.modelQuestion.findOne({
      where: { id: id },
    });
    if (!question) {
      throw new Error("Question not found.");
    }
    return resp(200, question);
  }

  async postQuestion(question: IQuestion) {
    const createdManager = await this.modelQuestion.create({ ...question });
    if (!createdManager) {
      throw new Error(`Failed to create question`);
    }
    return resp(200, createdManager);
  }

  async putQuestion(question: IQuestion, id: string) {
    const payload = { ...question, updatedAt: dateComp() };
    const [updateCount] = await this.modelQuestion.update(payload, {
      where: { id: id },
    });
    if (updateCount === 0) {
      throw new Error(`Failed to update question`);
    }
    return resp(200, "Question updated successfully");
  }

  async getEmployeeForm(chapa: string, period: number) {
    const employeeForm = await this.modelEmployeeForm.findOne({
      where: { registration: { [Op.like]: `%${chapa}` }, period: period },
      include: [{ model: Question, as: "questions" }],
    });
    if (!employeeForm) {
      throw new Error(`EmployeeForm not found`);
    }
    return resp(200, employeeForm);
  }

  async postEmployeeForm(employeeForm: IEmployeeForm) {
    try {
      const existingForm = await this.modelEmployeeForm.findOne({
        where: {
          registration: employeeForm.registration,
          period: employeeForm.period,
        },
      });
      if (existingForm?.dataValues) {
        throw new Error(
          "Employee form with this registration and period already exists."
        );
      }
    } catch (error: any) {
      throw new Error(`Failed to get employeeForm: ${error.message}`);
    }
    let createdEmployeeForm;
    try {
      createdEmployeeForm = await this.modelEmployeeForm.create({
        ...employeeForm,
      });
    } catch (error: any) {
      throw new Error(`Failed to create employeeForm: ${error.message}`);
    }
    try {
      const createQuestionsPromises = employeeForm.questions.map(
        async (question) => {
          return this.modelEmployeeFormQuestion.create({
            employeeFormId: createdEmployeeForm.id,
            questionId: question.questionId,
            questionValue: question.questionValue,
            questionValueEvaluator: question.questionValueEvaluator,
          });
        }
      );
      await Promise.all(createQuestionsPromises);
    } catch (error: any) {
      await this.modelEmployeeForm.destroy({
        where: { id: createdEmployeeForm.id },
      });
      throw new Error(
        `Failed to create employeeFormQuestion: ${error.message}`
      );
    }
    return resp(200, createdEmployeeForm);
  }

  async putEmployeeForm(employeeForm: IEmployeeForm, id: string) {
    let originalEmployeeForm;
    try {
      const existingForm = await this.modelEmployeeForm.findOne({
        where: {
          registration: employeeForm.registration,
          period: employeeForm.period,
        },
      });
      if (!existingForm?.dataValues) {
        throw new Error(
          "There is no employee form with this record and period."
        );
      }
      originalEmployeeForm = existingForm?.dataValues;
    } catch (error: any) {
      throw new Error(`Failed to get employeeForm: ${error.message}`);
    }
    try {
      const payload = { ...employeeForm, updatedAt: dateComp() };
      const [updateCount] = await this.modelEmployeeForm.update(payload, {
        where: { id: id },
      });
      if (updateCount === 0) {
        throw new Error("Failed or not found");
      }
    } catch (error: any) {
      throw new Error(`Failed to update EmployeeForm: ${error.message}`);
    }
    try {
      const updateQuestionsPromises = employeeForm.questions.map(
        async (question) => {
          return this.modelEmployeeFormQuestion.update(
            {
              questionId: question.questionId,
              questionValue: question.questionValue,
              questionValueEvaluator: question.questionValueEvaluator,
            },
            {
              where: { employeeFormId: id },
            }
          );
        }
      );
      await Promise.all(updateQuestionsPromises);
    } catch (error: any) {
      try {
        await this.modelEmployeeForm.update(originalEmployeeForm, {
          where: { id: id },
        });
      } catch (revertError: any) {
        throw new Error(
          `Failed to revert EmployeeForm after multiple attempts: ${revertError.message}`
        );
      }
      throw new Error(
        `Failed to revert EmployeeForm after multiple attempts: ${error.message}`
      );
    }
    return resp(200, "EmployeeForm updated successfully");
  }
}

export default rhService;
