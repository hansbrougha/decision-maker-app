import axios from "axios";

export default {
  // Gets all polls
  getPolls: function () {
    return axios.get("/api/polls");
  },
  // Gets the poll with the given id
  getPoll: function (id) {
    return axios.get("/api/polls/" + id);
  },
  // Deletes the poll with the given id
  deletePoll: function (id) {
    return axios.delete("/api/polls/" + id);
  },
  // Saves a poll to the database
  savePoll: function (pollData) {
    return axios.post("/api/polls", pollData);
  }
};
