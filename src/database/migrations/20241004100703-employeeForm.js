/*  */ "use strict";

const { UUID, UUIDV4 } = require("sequelize");

/** @type {import('Sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("employeeForm", {
      id: {
        type: UUID,
        defaultValue: UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      employeeName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      registration: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      department: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      position: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      admissionDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      nameEvaluator: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      registrationEvaluator: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      period: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      overallQuantitativeResult: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn("now"),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("employeeForm");
  },
};
