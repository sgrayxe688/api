const express = require("express");
const morgan = require("morgan");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

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
