const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let randomPollId = () => {
  return (
    "POLL_" +
    Math.floor((1 + Math.random()) * 0x100000)
      .toString(16)
      .substring(1)
  );
};

const pollSchema = new Schema({
  pollId: { type: String, default: randomPollId(), required: true },
  pollTitle: { type: String },
  // deciders: { type: Number, default: 100 },
  option1Title: { type: String },
  option1Val: { type: Number, default: 0 },
  option2Title: { type: String },
  option2Val: { type: Number, default: 0 },
  option3Title: { type: String },
  option3Val: { type: Number, default: 0 },
  option4Title: { type: String },
  option4Val: { type: Number, default: 0 },
  date: { type: Date, default: Date.now },
});

const Poll = mongoose.model("Poll", pollSchema);

module.exports = Poll;
