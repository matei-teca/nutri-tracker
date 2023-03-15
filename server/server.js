const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const User = require("./models/User");
mongoose.connect(
  "mongodb+srv://ceitreifantastici:0NVszPuND0ww7Duv@cluster0.ajojypi.mongodb.net/Users"
);

app
  .use(cors())
  .use(express.json())
  .post("/api/user", async (req, res) => {
    if ((await User.findOne({ email: req.body.email })) === null) {
      const name = `${req.body.fName} ${req.body.lName}`;
      const email = req.body.email;
      const password = req.body.password;

      const user = new User({
        name,
        email,
        password,
      })
        .save()
        .then(async (user) => res.json(user))
        .catch((err) => res.status(400).json({ success: false }));
    } else {
      res.send({ verify: "Already exists" });
    }
  })
  .get("/api/user/:email", async (req, res) => {
      const email = req.params.email;
      const user = await User.findOne({ "email": email });

      console.log(email);
      res.send(user ? user : {message: "Account doesn't exist"})
  })
app.listen(3001, () => console.log(`http://localhost:3001`));
