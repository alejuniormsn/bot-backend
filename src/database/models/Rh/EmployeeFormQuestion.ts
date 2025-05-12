import { Model } from "sequelize";
import sequelize from "sequelize";
import db from "../index";
import EmployeeForm from "./EmployeeForm";
import Questions from "./Questions";

class EmployeeFormQuestion extends Model {
  declare questionId: number;
  declare employeeFormId: number;
  declare questionValue: number;
  declare questionValueEvaluator: number;
}

EmployeeFormQuestion.init(
  {
    questionId: {
      primaryKey: true,
      type: sequelize.UUID,
      allowNull: false,
      references: {
        model: "questions",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    employeeFormId: {
      primaryKey: true,
      type: sequelize.UUID,
      allowNull: false,
      references: {
        model: "employeeForm",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    questionValue: {
      type: sequelize.FLOAT,
      allowNull: true,
    },
    questionValueEvaluator: {
      type: sequelize.FLOAT,
      allowNull: true,
    },
  },
  {
    sequelize: db,
    tableName: "employeeFormQuestion",
    timestamps: false,
    underscored: false,
  }
);

EmployeeForm.belongsToMany(Questions, {
  foreignKey: "employeeFormId",
  otherKey: "questionId",
  as: "questions",
  through: EmployeeFormQuestion,
});

Questions.belongsToMany(EmployeeForm, {
  foreignKey: "questionId",
  otherKey: "employeeFormId",
  as: "employeeForms",
  through: EmployeeFormQuestion,
});

export default EmployeeFormQuestion;
