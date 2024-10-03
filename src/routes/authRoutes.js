// routes/authRoutes.js
const express = require("express");
const { register, login } = require("../controllers/authController");
const router = express.Router();

// Ruta para el registro de nuevos usuarios
router.post("/register", register);

// Ruta para el inicio de sesión
router.post("/login", login);

module.exports = router;
