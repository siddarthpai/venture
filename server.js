const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

const app = express();

app.use(express.json());

mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true });

const personSchema = new mongoose.Schema({
  name: String,
  gender: String,
});

const Person = mongoose.model("Person", personSchema);

app.get("/api/genderCount", async (req, res) => {
  try {
    const genderCount = await Person.aggregate([
      { $group: { _id: "$gender", count: { $sum: 1 } } },
    ]);
    res.json(genderCount);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(8000, () => {
  console.log("Server started on port 5000");
});
