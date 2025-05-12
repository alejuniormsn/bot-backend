import { Model, UUID, UUIDV4, JSON } from "sequelize";
import sequelize from "sequelize";
import db from "../index";

class EmployeeForm extends Model {
  declare id: string;
  declare employeeName: string;
  declare registration: string;
  declare department: string;
  declare position: string;
  declare admissionDate: string;
  declare nameEvaluator: string;
  declare registrationEvaluator: string;
  declare period: number;
  declare overallQuantitativeResult: number;
  declare createdAt: Date;
  declare updatedAt: Date;
}

EmployeeForm.init(
  {
    id: {
      type: UUID,
      defaultValue: UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    employeeName: {
      type: sequelize.STRING,
      allowNull: false,
    },
    registration: {
      type: sequelize.STRING,
      allowNull: false,
    },
    department: {
      type: sequelize.STRING,
      allowNull: false,
    },
    position: {
      type: sequelize.STRING,
      allowNull: false,
    },
    admissionDate: {
      type: sequelize.DATE,
      allowNull: false,
    },
    nameEvaluator: {
      type: sequelize.STRING,
      allowNull: false,
    },
    registrationEvaluator: {
      type: sequelize.STRING,
      allowNull: false,
    },
    period: {
      type: sequelize.INTEGER,
      allowNull: false,
    },
    overallQuantitativeResult: {
      type: sequelize.FLOAT,
      allowNull: true,
    },
    createdAt: {
      type: sequelize.DATE,
      allowNull: false,
      defaultValue: sequelize.fn("now"),
    },
    updatedAt: {
      type: sequelize.DATE,
      allowNull: true,
    },
  },
  {
    sequelize: db,
    tableName: "employeeForm",
    timestamps: false,
    underscored: false,
  }
);

export default EmployeeForm;
