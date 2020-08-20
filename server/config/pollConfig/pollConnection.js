const mongoose = require("mongoose");
const config = require("./index.js");

const URI = config.mongoURI;
mongoose.connect(URI);

// When successfully connected
mongoose.connection.on("connected", () => {
  console.log("Established Mongoose Default Connection(POLLS)");
});

// When connection throws an error
mongoose.connection.on("error", (err) => {
  console.log("(POLL)Mongoose Default Connection Error : " + err);
});
