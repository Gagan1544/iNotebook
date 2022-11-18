const mongoose = require("mongoose");
const { Schema } = mongoose;
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
// const User = mongoose.model('user', UserSchema);
// User.createIndexes(); //Ye UNIQUE VALUES K LIYE KIYA THA USNE BUT ABHI DEKHNA H ISKE BAARE M KYUNKI UNIQUE:TRUE CHL RA H MERA
module.exports = mongoose.model("user", UserSchema);
