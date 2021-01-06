const mongoose = require("mongoose");

const nannySchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6 },
  
});

module.exports = Nanny = mongoose.model("nanny", nannySchema);