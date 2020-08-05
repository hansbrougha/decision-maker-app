import User from "./user";
import mongoose from "mongoose";

user.create([
  {
    name: "John Doe",
    email: "john.doe@test.com",
    hasedPassword: "test",
    salt: "test",
    polls: [
      {
        pollTitle: "Does This Work?",
        pollOptions: [
          { optionTitle: "YEA", optionVal: 1 },
          { optionTitle: "NAH", optionVal: 23 },
        ],
      },
      {
        pollTitle: "What should I eat for dinner?",
        pollOptions: [
          { optionTitle: "Chipotle", optionVal: 39 },
          { optionTitle: "Salad", optionVal: 10 },
          { optionTitle: "Doritos and Mnt Dew", optionVal: 3 },
          { optionTitle: "All the above", optionVal: 73 },
        ],
      },
    ],
  },
  {
    name: "Jane Doe",
    email: "Jane.doe@test.com",
    hasedPassword: "janetest",
    salt: "janetest",
    polls: [
      {
        pollTitle: "Should I sleep?",
        pollOptions: [
          { optionTitle: "YEA", optionVal: 4 },
          { optionTitle: "NAH", optionVal: 17 },
        ],
      },
      {
        pollTitle: "What is your favorite color?",
        pollOptions: [
          { optionTitle: "Yellow", optionVal: 3 },
          { optionTitle: "Blue", optionVal: 19 },
          { optionTitle: "Purple", optionVal: 5 },
          { optionTitle: "Red", optionVal: 7 },
        ],
      },
    ],
  },
]);

// polls: [
//     {
//       pollId: { type: String, default: randomId(), required: true },
//     },
//     { pollTitle: { type: String } },
//     {
//       pollOptions: [
//         { optionTitle: { type: String } },
//         { optionVal: { type: Number } },
//       ],
//     },
//   ],
