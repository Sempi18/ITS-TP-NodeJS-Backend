// routes/paymentRoutes.js
const express = require("express");
const { createPayment } = require("../controllers/paymentController");
const router = express.Router();

router.post("/register", createPayment);

module.exports = router;
