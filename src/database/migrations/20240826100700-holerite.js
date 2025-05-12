/*  */ "use strict";

const { JSON } = require("sequelize");

/** @type {import('Sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("payrollfrequency", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      matricula: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cpf: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      totalLiqu: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      dataPagto: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      dataCompet: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      func: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      totalVenc: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      totalDesc: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      salBase: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      baseInss: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      baseFgts: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      fgtsMes: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      baseCalcIrf: {
        type: Sequelize.FLOAT,
        allowNull: false,
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
      description: {
        type: Sequelize.ARRAY(JSON),
        allowNull: false,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("payrollfrequency");
  },
};
