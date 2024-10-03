// database/database.js
const { Sequelize } = require("sequelize");
require("dotenv").config();

// Crea una nueva instancia de Sequelize usando las variables de entorno
const sequelize = new Sequelize(
  process.env.DB_Backend, // Nombre de la base de datos
  process.env.Sempi, // Usuario de la base de datos
  process.env.db123456, // Contraseña de la base de datos
  {
    host: process.env.DB_HOST, // Host de la base de datos
    dialect: "mysql", // Dialecto de la base de datos (puede ser 'mysql', 'postgres', etc.)
    logging: false, // Desactiva el logging de Sequelize (puedes habilitarlo si es necesario)
  }
);

// Función para comprobar la conexión a la base de datos
const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexión a la base de datos establecida con éxito.");
  } catch (error) {
    console.error("No se pudo conectar a la base de datos:", error);
  }
};

// Cargar todos los modelos (ejemplo con el modelo de Usuario y Pago)
const User = require("./models/User");
const Payment = require("./models/Payment");

// Relaciones entre modelos
User.hasMany(Payment, { foreignKey: "userId" });
Payment.belongsTo(User, { foreignKey: "userId" });

// Exportar sequelize y los modelos
module.exports = {
  sequelize,
  User,
  Payment,
  testConnection,
};
