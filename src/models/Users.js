// database/models/User.js
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");

class User extends Model {}

User.init(
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM("superadmin", "admin", "user"),
      allowNull: false,
    },
  },
  { sequelize, modelName: "user" }
);

module.exports = User;
