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
  .post("/api/user", (req, res) => {
    const name = `${req.body.fName} ${req.body.lName}`;
    const email = req.body.email;
    const password = req.body.password;

    const user = new User({
      name,
      email,
      password,
    })
      .save()
      .then((user) => res.json(user))
      .catch((err) => res.status(400).json({ success: false }));
  });
app.listen(3001, () => console.log(`http://localhost:3001`));
