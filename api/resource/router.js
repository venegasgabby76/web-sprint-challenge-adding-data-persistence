// build your `/api/resources` router here
const express = require("express");
const db = require("./model");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const resources = await db.find();
    res.json(resources);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "cannot get resources",
    });
  }
});

router.post("/", async (req, res) => {
  const addResource = req.body;
  try {
    const newResource = await db.add(addResource);
    res.json(newResource);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "could not add the resource" });
  }
});

module.exports = router;