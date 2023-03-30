const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const User = require("./models/User");
const Product = require("./models/Product");

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
      const days = {};

      const user = new User({
        name,
        email,
        password,
        days,
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
    const user = await User.findOne({ email: email });

    console.log(email);
    res.send(user ? user : { message: "Account doesn't exist" });
  })
  .get("/api/getuser/:email", async (req, res) => {
    const email = req.params.email;
    res.send(JSON.stringify(await User.findOne({ email: email })));
  })
  .get("/api/products/:code", async (req, res) => {
    res.send(
      JSON.stringify(await Product.findOne({ barcode: req.params.code }))
    );
  })
  .put("/api/user/:customDay/:email/:grams", async (req, res) => {
    let day = req.params.customDay;
    console.log(req.params.email);
    const product = await Product.findOne({ barcode: req.body.barcode });
    await User.updateOne(
      { email: req.params.email },
      {
        $push: {
          [`days.${day}`]: {
            name: req.body.name,
            code: req.body.barcode,
            grams: req.params.grams,
          },
        },
      }
    );

    if (!product) {
      new Product({
        ...req.body,
      }).save();
    }
    res.send(JSON.stringify(await User.findOne({ email: req.params.email })));
  })
  .put("/api/updateInformations/:email", async (req, res) => {
    await User.updateOne(
      { email: req.params.email },
      { informations: req.body.informations, kcal: req.body.calories }
    );
    res.send(JSON.stringify(await User.findOne({ email: req.params.email })));
  });
app.listen(3001, () => console.log(`http://localhost:3001`));
