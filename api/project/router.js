// build your `/api/projects` router here
const express = require("express");
const db = require("./model");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const projects = await db.find();
    res.json(projects);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "cannot get projects",
    });
  }
});

router.post("/", async (req, res) => {
  const addProject = req.body;
  try {
    const newProject = await db.add(addProject);
    res.json(newProject);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "could not add the project" });
  }
});

module.exports = router;
