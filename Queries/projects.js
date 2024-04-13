const db = require("../db/db.Config.js");

const getAllProjects = async () => {
  try {
    const allProject = await db.any("SELECT * FROM works_portfolio ");
    console.log("Data retrieved from databse", allProject);
    return allProject;
  } catch (error) {
    console.error("Error in getAllProjects", error);
    throw error;
  }
};



module.exports ={
    getAllProjects
}