// import mongoose from "mongoose";
// import crypto from "crypto";
const mongoose = require("mongoose");
const crypto = require("crypto");
const Schema = mongoose.Schema;

let randomId = () => {
  return Math.floor((1 + Math.random()) * 0x100000)
    .toString(16)
    .substring(1);
};
//testing randomID
console.log(randomId());

const userSchema = new Schema({
  profileId: {
    type: String,
    default: randomId(),
    required: true
  },
  name: {
    type: String,
    trim: true,
    required: "User Name is required"
  },
  email: {
    type: String,
    trim: true,
    unique: "Email already exists",
    match: [/.+\@.+\..+/, "Please fill a valid email address"],
    required: "Email is required"
  },
  hashedPassword: {
    type: String,
    required: "Password is required"
  },
  salt: {
    type: String
  }
});
userSchema
  .virtual("password")
  .set(function (password) {
    this._password = password;
    this.salt = this.makeSalt();
    this.hashedPassword = this.encryptedPassword(password);
  })
  .get(function () {
    return this._password;
  });

userSchema.methods = {
  authenticate: function (plainText) {
    return this.encryptedPassword(plainText) === this.hashedPassword;
  },
  encryptedPassword: function (password) {
    if (!password) return "";
    try {
      return crypto
        .createHmac("sha1", this.salt)
        .update(password)
        .digest("hex");
    } catch (err) {
      return "";
    }
  },
  makeSalt: function () {
    return Math.round(new Date().valueOf() * Math.random()) + "";
  }
};

userSchema.path("hashedPassword").validate(function (v) {
  if (this.hashedPassword && this._password.length < 6) {
    this.invalidate("password", "Password must be at least 6 characters long.");
  }
  if (this.isNew && !this._password) {
    this.invalidate("password", "Password is required.");
  }
}, null);

module.exports = mongoose.model("User", userSchema);
