const mongoose = require("mongoose");

const parentsSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6 },
  
});

module.exports = Parent = mongoose.model("parent", parentsSchema);