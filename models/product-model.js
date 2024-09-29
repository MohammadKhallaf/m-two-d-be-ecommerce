const mongoose = require("mongoose");
// collection in mongo
// 1. schema
// 2. export (model from schema)
// 3. model <---> controller

const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: { type: String, required: true },
  price: {
    type: Number,
    required: true,
  },
  image: String,
  description: String,
  stock: Number,
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
