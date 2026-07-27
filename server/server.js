const dns = require("node:dns");

dns.setServers(["1.1.1.1", "8.8.8.8"]);

const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db");
const transactionRoutes = require("./routes/transactionRoutes");

dotenv.config();

connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/transactions", transactionRoutes);

app.get("/", (req, res) => {
  res.send("Expense Tracker API Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});