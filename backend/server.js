const express = require("express");
const app = express();
const router = require("./routes/translate");
const cors = require('cors');

// MiddleWare
app.use(express.json());
app.use(cors());
app.use("/", router);


// Server is listening ...
const port = process.env.PORT || 5000;
app.listen(port , () => {
  console.log(`Server running at ${port}`);
})

