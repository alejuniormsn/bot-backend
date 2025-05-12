import { UUID, UUIDV4, Model } from "sequelize";
import sequelize from "sequelize";
import db from "../index";

class Questions extends Model {
  declare id: string;
  declare question: string;
  declare createdAt: Date;
  declare updatedAt: Date;
}

Questions.init(
  {
    id: {
      type: UUID,
      defaultValue: UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    question: {
      type: sequelize.TEXT,
      allowNull: false,
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
    tableName: "questions",
    timestamps: false,
    underscored: false,
  }
);

export default Questions;
