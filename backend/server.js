const express = require("express");
const app = express();
const router = require("./routes/translate");
const mongoose = require("mongoose");
const cors = require('cors');
require("dotenv").config();


// MiddleWare
app.use(express.json());
app.use(cors());
app.use("/", router);


// Server is listening ...
const port = 5000 || process.env.PORT;
mongoose
  .connect(process.env.MONGO_URI)
  .then((result) => app.listen(5000, console.log("Server is listening...")))
  .catch((err) => {
    console.log(err);
  });
