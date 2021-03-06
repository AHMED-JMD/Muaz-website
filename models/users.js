const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  phoneNum: {
    type: Number,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "basic",
  },
  videosId: {
    type: Array,
    default: [],
  },
});

module.exports = mongoose.model("user", UserSchema);
