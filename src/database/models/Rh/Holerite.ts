import { FloatDataType, JSON, Model } from "sequelize";
import sequelize from "sequelize";
import db from "../index";

class Holerite extends Model {
  declare id: number;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare matricula: string;
  declare nome: string;
  declare cpf: string;
  declare totalLiqu: FloatDataType;
  declare dataPagto: string;
  declare dataCompet: string;
  declare func: string;
  declare totalVenc: FloatDataType;
  declare totalDesc: FloatDataType;
  declare salBase: FloatDataType;
  declare baseInss: FloatDataType;
  declare baseFgts: FloatDataType;
  declare fgtsMes: FloatDataType;
  declare baseCalcIrf: FloatDataType;
  declare description: Array<JSON>; //{ codOp: int, history: varchar, ref: float, valor: float }
}

Holerite.init(
  {
    id: {
      type: sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    matricula: {
      type: sequelize.STRING,
      allowNull: false,
    },
    nome: {
      type: sequelize.STRING,
      allowNull: false,
    },
    cpf: {
      type: sequelize.STRING,
      allowNull: false,
    },
    totalLiqu: {
      type: sequelize.FLOAT,
      allowNull: false,
    },
    dataPagto: {
      type: sequelize.STRING,
      allowNull: false,
    },
    dataCompet: {
      type: sequelize.STRING,
      allowNull: false,
    },
    func: {
      type: sequelize.STRING,
      allowNull: false,
    },
    totalVenc: {
      type: sequelize.FLOAT,
      allowNull: false,
    },
    totalDesc: {
      type: sequelize.FLOAT,
      allowNull: false,
    },
    salBase: {
      type: sequelize.FLOAT,
      allowNull: false,
    },
    baseInss: {
      type: sequelize.FLOAT,
      allowNull: false,
    },
    baseFgts: {
      type: sequelize.FLOAT,
      allowNull: false,
    },
    fgtsMes: {
      type: sequelize.FLOAT,
      allowNull: false,
    },
    baseCalcIrf: {
      type: sequelize.FLOAT,
      allowNull: false,
    },
    createdAt: {
      type: sequelize.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: sequelize.DATE,
      allowNull: true,
    },
    description: {
      type: sequelize.ARRAY(JSON),
      allowNull: false,
    },
  },
  {
    sequelize: db,
    tableName: "payrollfrequency",
    timestamps: false,
    underscored: false,
  }
);

export default Holerite;
