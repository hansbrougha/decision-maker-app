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

  pollOptions: [
    { option1Title: { type: String }, option1Val: { type: Number } },
    { option2Title: { type: String }, option2Val: { type: Number } },
    { option3Title: { type: String }, option3Val: { type: Number } },
    { option4Title: { type: String }, option4Val: { type: Number } },
  ],
  date: { type: Date, default: Date.now },
});

const Poll = mongoose.model("Poll", pollSchema);
export default Poll;
