import Poll from "../models/poll.js";

// Defining methods for the pollsController
export const findAll = (req, res) => {
  Poll.find(req.query)
    .sort({ date: -1 })
    .then((dbModel) => res.json(dbModel))
    .catch((err) => res.status(422).json(err));
};
export const findById = (req, res) => {
  Poll.findById(req.params.id)
    .then((dbModel) => res.json(dbModel))
    .catch((err) => res.status(422).json(err));
};
export const create = (req, res) => {
  Poll.create(req.body)
    .then((dbModel) => res.json(dbModel))
    .catch((err) => res.status(422).json(err));
};
export const update = (req, res) => {
  Poll.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then((dbModel) => res.json(dbModel))
    .catch((err) => res.status(422).json(err));
};
export const remove = (req, res) => {
  Poll.findById({ _id: req.params.id })
    .then((dbModel) => dbModel.remove())
    .then((dbModel) => res.json(dbModel))
    .catch((err) => res.status(422).json(err));
};
