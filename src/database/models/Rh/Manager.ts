import { JSON, Model } from "sequelize";
import sequelize from "sequelize";
import db from "../index";

class Manager extends Model {
  declare id: number;
  declare createdAt: Date;
  declare registration: string;
  declare nome: string;
  declare team: Array<JSON>;
  declare fone: string;
}

Manager.init(
  {
    id: {
      type: sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    registration: {
      type: sequelize.STRING,
      allowNull: false,
    },
    nome: {
      type: sequelize.STRING,
      allowNull: false,
    },
    createdAt: {
      type: sequelize.DATE,
      allowNull: false,
      defaultValue: sequelize.fn("now"),
    },
    team: {
      type: sequelize.ARRAY(JSON),
      allowNull: true,
    },
    fone: {
      type: sequelize.STRING,
      allowNull: true,
    },
  },
  {
    sequelize: db,
    tableName: "manager",
    timestamps: false,
    underscored: false,
  }
);

export default Manager;
