const mongoose = require("mongoose");

const parentsSchema = new mongoose.Schema({
  firstName: { type: String, required: true},
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6 },
  
});

module.exports = Parent = mongoose.model("parent", parentsSchema);