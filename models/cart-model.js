const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// create schema

const cartSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  items: [
    {
      product: {
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      quantity: {
        type: Number,
        default: 1,
        min: 1,
      },

      // quantity:
    },
  ],
});

module.exports = mongoose.model("Cart", cartSchema);
