const express = require ('express');
const mongoose = require ('mongoose');
const cors = require ('cors');
require("dotenv").config();

//setup express
app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log (`Listening on port : ${PORT}`))


//setup mangoose
mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

var db = mongoose.connection;

db.once('open', function() {
  console.log('mongoose connected successfully');
});

db.on('error', function(error) {
  console.log(error)
});

app.use('/parent', require('./routes/parentRouter'));
app.use('/nanny', require('./routes/nannyRouter'))

  