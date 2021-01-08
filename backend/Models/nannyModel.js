const mongoose = require("mongoose");

const nannySchema = new mongoose.Schema({
  Profile_picture: String,
  FirstName:  String,
  LastName:  String,
  email:  String,
  phone_number: String,
  region :  String,
  avaibility : {
    day :  String,
    time : {
        part_time : String,
        full_time : String
    }
  },
  about: String
  
});
const Nanny = mongoose.model("nanny", nannySchema);

module.exports = Nanny