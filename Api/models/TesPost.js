const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create Schema
const TestPostchema = new Schema({
  text: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = TesPost = mongoose.model("tesPost", TestPostchema);
