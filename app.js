const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const authRouter = require("./routes/api/auth");
const studentsRouter = require("./routes/api/students");
const usersRouter = require("./routes/api/users");
const emailRouter = require("./routes/api/email");
const periodsRouter = require("./routes/api/periods");

const app = express();
const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/students", studentsRouter);
app.use("/api/users", usersRouter);
app.use("/api/email", emailRouter);
app.use("/api/periods", periodsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  if (!err.status) {
    err.status = 500;
    err.message = "Server error";
  }

  res.status(err.status).json({ message: err.message });
  //   const { status = 500, message = "Server error" } = err;
  //   res.status(status).json({ message });
});

module.exports = app;
