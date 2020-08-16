import mongoose from "mongoose";
import db from "../models";
import dotenv from "dotenv";
dotenv.config();

// This file empties the polls collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI);

const pollSeed = [
  {
    pollTitle: "What is your favorite color",
    options: [
      { name: "Red", value: 4 },
      { name: "Blue", value: 14 },
      { name: "Orange", value: 12 },
      { name: "green", value: 6 },
    ],
  },
  {
    pollTitle: "What is the best meal of the day",
    option1Title: "Breakfast",
    option1Val: 12,
    option2Title: "Lunch",
    option2Val: 23,
    option3Title: "Dinner",
    option3Val: 8,
    option4Title: "Brunch",
    option4Val: 0,
  },
  {
    pollTitle: "What is your favorite poll application",
    option1Title: "Decision Maker",
    option1Val: 94,
    option2Title: "Group 5's project 3",
    option2Val: 114,
    option3Title: "This one",
    option3Val: 122,
    option4Title: "All of the above",
    option4Val: 56,
  },
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
