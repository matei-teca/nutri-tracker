const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const productSchema = new Schema({
  title: String,
  nutritions: {},
});

const Product = model("Product", productSchema);
module.exports = Product;
