const express = require ('express');
const mongoose = require ('mongoose');
const cors = require ('cors');
require("dotenv").config();

//setup express
app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.port || 5000;

app.listen(PORT, () => console.log (`Listening on port : ${PORT}`))


//setup mangoose
mongoose.connect(
    process.env.MONGODB_CONNECTION_STRING,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    },
    (err) => {
      if (err) throw err;
      console.log("MongoDB connection established");
    }
  );

  