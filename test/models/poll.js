const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pollSchema = new Schema({
  //Can you write in your poll schema?
  // title: { type: String, required: true },
  // author: { type: String, required: true },
  // body: String,
  // date: { type: Date, default: Date.now }
});

const Poll = mongoose.model("Poll", pollSchema);

module.exports = Poll;
