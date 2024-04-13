const express = require("express");


const {
    getAllProjects
} = require("../Queries/projects.js")


const projects = express.Router()

projects.get("/", async (req, res) => {
    console.log("GET Request received for all items.");
    const allProjects = await getAllProjects();
    if (allProjects[0]) {
      res.status(200).json({ success: true, data: { payload: allProjects } });
    } else {
      res
        .status(404)
        .json({ success: false, data: { error: "No projects found" } });
    }
  });


  module.exports = projects;