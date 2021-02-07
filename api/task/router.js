// build your `/api/tasks` router here
const express = require("express");
const db = require("./model");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const tasks = await db.find();
    res.json(tasks);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "cannot get tasks",
    });
  }
});

// router.post("/", async (req, res) => {
//   const addTask = req.body;
//   try {
//     const newTask = await db.add(addTask);
//     res.json(newTask);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ message: "could not add the task" });
//   }
// });
router.post("/", (req, res) => {
    const newTask = req.body;
    
    db.add(newTask)
      .then((task) => {
        res.status(201).json(task);
      })
      .catch((error) => {
          console.log(error)
        res.status(500).json({ message: "Failed to create new task" });
      });
  });



module.exports = router;
