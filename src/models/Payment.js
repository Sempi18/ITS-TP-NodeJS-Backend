// database/models/Payment.js
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");

class Payment extends Model {}

Payment.init(
  {
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    receiptPath: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { sequelize, modelName: "payment" }
);

module.exports = Payment;
