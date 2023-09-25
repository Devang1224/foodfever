const mongoose = require("mongoose");

const schema = mongoose.Schema;

const Register = new schema({
  name: {
    type: String,
    required: true,
    unique: true,
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
});

module.exports = mongoose.model("register", Register, "register");
