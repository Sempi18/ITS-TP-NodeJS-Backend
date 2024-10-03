// controllers/authController.js
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../database/models/User");

// Registro de usuario
exports.register = async (req, res) => {
  const { username, password, role } = req.body;

  try {
    // Verifica si el usuario ya existe
    let user = await User.findOne({ where: { username } });
    if (user) {
      return res
        .status(400)
        .json({ message: "El nombre de usuario ya está en uso" });
    }

    // Hashea la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crea un nuevo usuario
    user = await User.create({
      username,
      password: hashedPassword,
      role,
    });

    res.status(201).json({ message: "Usuario registrado exitosamente", user });
  } catch (error) {
    res.status(500).json({ message: "Error al registrar el usuario", error });
  }
};

// Inicio de sesión de usuario
exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Verifica si el usuario existe
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res
        .status(400)
        .json({ message: "Usuario o contraseña incorrectos" });
    }

    // Verifica la contraseña
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({ message: "Usuario o contraseña incorrectos" });
    }

    // Genera un token JWT
    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    res.status(200).json({ message: "Inicio de sesión exitoso", token });
  } catch (error) {
    res.status(500).json({ message: "Error en el inicio de sesión", error });
  }
};
