const express = require("express");
const http = require("http");
const initSocket = require("./utils/socket");
const userRoutes = require("./routes/userRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const errorHandler = require("./middleware/errorMiddleware");

const app = express();
const server = http.createServer(app);
const io = initSocket(server);

app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/payments", paymentRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
