const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfilePostSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  text: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  tags: {
    type: [String]
  }
});

module.exports = ProfilePost = mongoose.model("ProfilePost", ProfilePostSchema);
