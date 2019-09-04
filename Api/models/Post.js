const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create Schema
const TestPostchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  username: {
    type: String
  },
  title: {
    type: String,
    default: ""
  },
  text: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "users"
      }
    }
  ],
  isDeleted: {
    type: Boolean,
    default: false
  }, tags: {
    type: [String]
  }
});

module.exports = TesPost = mongoose.model("tesPost", TestPostchema);

// tags: {
//   type: [String],
//   default: ""
// }
