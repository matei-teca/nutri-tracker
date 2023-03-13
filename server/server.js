const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
mongoose.connect(
  "mongodb+srv://ceitreifantastici:0NVszPuND0ww7Duv@cluster0.ajojypi.mongodb.net/FrestyleMERN"
);

app
.use(cors())
.use(express.json())

app.listen(3001, () => console.log(`http://localhost:3001`));
