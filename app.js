const express = require("express");
const cors = require("cors");
const app = express();
const projectsControllers = require("./Controllers/projectsControllers.js");
const contactController = require("./Controllers/contactMeControllers.js")
app.use(cors());
app.use(express.json());

app.use("/project", projectsControllers);
app.use("/contact", contactController); 

app.get("/", (req, res) => {
  res.send("Welcome to Batista projects");
});

app.get("*", (req, res) => {
  res.status(404).json({ success: false, data: { error: "Page not Found" } });
});

module.exports = app;