const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    status: "ok",
    message: "SubCuts backend is running"
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "SubCuts API is working"
  });
});

module.exports = app;
