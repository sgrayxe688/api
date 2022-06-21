require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const morgan = require("morgan");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to mongodb");
});

app.use(morgan("tiny"));

app.get("/api", (req, res) => {
  const data = {
    username: "Ethan",
    age: 24,
    coolness: "MAX",
  };
  res.json(data);
});

app.listen(PORT, console.log(`server is listening on port: ${PORT}`));
