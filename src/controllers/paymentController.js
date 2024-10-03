// controllers/paymentController.js
const Payment = require("../database/models/Payment");
const multer = require("multer");
const path = require("path");

// Configuración de Multer para subir archivos PDF
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});
const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const filetypes = /pdf/;
    const extname = filetypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb("Only PDFs are allowed");
    }
  },
}).single("receipt");

exports.createPayment = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ message: err });
    }

    const { amount, userId } = req.body;
    const receiptPath = req.file.path;

    try {
      const payment = await Payment.create({ amount, receiptPath, userId });
      res
        .status(201)
        .json({ message: "Payment registered successfully", payment });
    } catch (error) {
      res.status(500).json({ message: "Error registering payment", error });
    }
  });
};
