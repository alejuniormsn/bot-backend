"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("employeeFormQuestion", {
      questionId: {
        primaryKey: true,
        type: Sequelize.UUID,
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
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "employeeForm",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      questionValue: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      questionValueEvaluator: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("employeeFormQuestion");
  },
};
