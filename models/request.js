const mongoose = require("mongoose");

const RequestSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  phoneNum: {
    type: Number,
    required: true,
  },
  videoname: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  videoId: {
    type: Array,
    required: true,
    default: [],
  },
  userId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("request", RequestSchema);
