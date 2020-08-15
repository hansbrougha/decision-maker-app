import mongoose from "mongoose";
const Schema = mongoose.Schema;

let randomPollId = () => {
  return (
    "POLL_" +
    Math.floor((1 + Math.random()) * 0x100000)
      .toString(16)
      .substring(1)
  );
};
console.log("randomPollId", randomPollId());

const pollSchema = new Schema({
  pollId: { type: String, default: randomPollId(), required: true },
  pollTitle: { type: String },
  deciders: { type: Number, default: 100 },
  options: [{ name: String, value: { type: Number, default: 0 } }],
  date: { type: Date, default: Date.now },
});

const Poll = mongoose.model("Poll", pollSchema);
export default Poll;
