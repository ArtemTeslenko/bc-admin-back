const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const authRouter = require("./routes/api/auth");
const studentsRouter = require("./routes/api/students");
const usersRouter = require("./routes/api/users");
const emailRouter = require("./routes/api/email");
const periodsRouter = require("./routes/api/periods");
const locationsRouter = require("./routes/api/locations");

const app = express();
const formatsLogger = app.get("env") === "development" ? "dev" : "short";

const corsOptions = {
  // origin:
  //   app.get("env") === "development"
  //     ? "http://localhost:5173"
  //     : "https://british-camp-admin.netlify.app",
  // origin: ["http://localhost:5173", "https://british-camp-admin.netlify.app"],
  origin: "*",
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
};

app.use(logger(formatsLogger));
app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/students", studentsRouter);
app.use("/api/users", usersRouter);
app.use("/api/email", emailRouter);
app.use("/api/periods", periodsRouter);
app.use("/api/locations", locationsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  if (!err.status) {
    err.status = 500;
    err.message = "Server error";
  }

  res.status(err.status).json({ message: err.message });
});

module.exports = app;
