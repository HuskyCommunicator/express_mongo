const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema(
  {
    email: String,
    nickName: String,
    password: String,
  },
  { versionKey: false }
);

const userModel = mongoose.model("user", UserSchema);
module.exports = userModel;
