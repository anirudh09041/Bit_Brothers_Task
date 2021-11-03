const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    default: true,
  },
});

const userInfo = mongoose.model("userInfo", userSchema);
module.exports = userInfo;
