// config.js
const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_Backend,
  process.env.Sempi,
  process.env.db123456,
  {
    host: process.env.localhost,
    dialect: "mysql",
  }
);

module.exports = sequelize;
