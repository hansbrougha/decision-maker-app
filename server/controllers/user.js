// import User from "../models/user.js";
// import errorHandler from "../helpers/dbErrorHandler.js";
const User = require("../models/user.js");
const errorHandler = require("../helpers/dbErrorHandler.js");

const registerUser = (req, res, next) => {
  const user = new User(req.body);
  user.save((err, result) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      });
    }
    res.status(200).json({
      message: "New user registered successfully!"
    });
  });
};

const findUserById = (req, res, next, id) => {
  User.findById(id).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "No user found with that credentials!"
      });
    }
    req.profile = user;
    next();
  });
};

const findPollById = (req, res, next, id) => {
  User.findById(id).exec((err, poll) => {
    if (err) {
      console.error(err);
    }
    req.poll = poll;
    next();
  });
};

const findUserProfile = (req, res) => {
  User.findById(id).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "No user found with that credentials!"
      });
    }
    req.profile = user;

    req.profile.hashedPassword = undefined;
    req.profile.salt = undefined;
    next();
  });
};

const deleteUser = (req, res, next) => {
  let user = req.profile;
  user.remove((err, deletedUser) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      });
    }
    deletedUser.hashedPassword = undefined;
    user.salt = undefined;
    res.json(user);
  });
};

const getAllUsers = (req, res) => {
  User.find(req.query)
    .then((users) => res.json(users))
    .catch((err) => res.status(422).json(err));
};
const updatePoll = (req, res) => {
  User.findOneAndUpdate({ _id: req.params.id }, req.body + 1)
    .then((poll) => res.json(poll))
    .catch((err) => res.status(422).json(err));
};

module.exports = {
  registerUser,
  findUserById,
  findPollById,
  findUserProfile,
  deleteUser,
  getAllUsers,
  updatePoll
};
