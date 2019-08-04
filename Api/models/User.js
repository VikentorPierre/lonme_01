const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create Schema
const UserSchema = new Schema({
  typeOfStrategy: {
    type: String,
    required: true
  },

  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
    //match: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  },
  password: {
    type: String,
    required: true
  },
  register_date: {
    type: Date,
    default: Date.now
  },
  isDeleted: {
    type: Boolean,
    default: false,
    required: true
  }
});

UserSchema.method.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
UserSchema.method.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = User = mongoose.model("user", UserSchema);
