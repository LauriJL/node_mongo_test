const express = require("express");
let router = express.Router();
const app = express();
router.use(express.json());
app.use(router);
const Person = require("../models/person");

// GET ALL
router.get("/getAll", async (req, res) => {
  try {
    const data = await Person.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET ONE
router.get("/getOne/:id", async (req, res) => {
  try {
    const data = await Person.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST
router.post("/post", async (req, res) => {
  if (!req.body) {
    return res.status(400).json({ message: "Bad Request." });
  }
  let person = new Person({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    age: req.body.age,
    profession: req.body.profession,
    email: req.body.email,
  });
  try {
    const dataToSave = await person.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// UPDATE
router.patch("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Person.findByIdAndUpdate(id, updatedData, options);

    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE
router.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Person.findByIdAndDelete(id);
    res.send(
      `${data.first_name} ${data.last_name} has been deleted from the system.`
    );
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
