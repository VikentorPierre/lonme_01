const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CommentsSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user"
  },
  username: {
    type: String
  },
  text: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = Comments = mongoose.model("Comments", CommentsSchema);
