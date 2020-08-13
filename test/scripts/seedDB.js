const mongoose = require("mongoose");
const db = require("../models");

// This file empties the polls collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactcms");

const pollSeed = [
  {
    title: "What is your decision?",
    deciders: 10,
    option1: "Decide",
    option2: "Don't Decide",
    option3: "Ask my mom",
    option4: "Take a nap"
  },
  {
    title: "What is your decision?",
    deciders: 8,
    option1: "Snacks",
    option2: "Breakfast",
    option3: "Dinner",
    option4: "Breakfast for Dinner"
  },
  {
    title: "What is your decision?",
    deciders: 4,
    option1: "up",
    option2: "down",
    option3: "left",
    option4: "right"
  }
];

db.Poll.remove({})
  .then(() => db.Poll.collection.insertMany(pollSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
