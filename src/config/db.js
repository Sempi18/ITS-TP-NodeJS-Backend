const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("dbproject", "", "123456", {
  host: "localhost",
  dialect: "sqlite",
  storage: "./database.sqlite",
});

module.exports = sequelize;
