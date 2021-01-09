const express = require ('express');
const mongoose = require ('mongoose');
// const bodyParser = require ('body-parser')
const cors = require ('cors');
require("dotenv").config();

//setup express
app = express();
app.use(express.json());
app.use(cors());
// app.use(express.static(__dirname + '/../react-client/public'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));

// app.post('/parent/SearchNannies', auth, function (req, res){
//   console.log('Post on /SearchNannies :' , req.body)

const PORT = process.env.PORT || 5000;



app.listen(PORT, () => console.log (`listening on port ${PORT}and To get started, visit: http://localhost:5000`))


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
app.use('/nanny', require('./routes/nannyRouter'));

module.exports.db = db

