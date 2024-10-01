const Cart = require("../models/cart-model");

const getCart = async (req, res) => {
  try {
    const userId = req.params.id;

    let cart = await Cart.findOne({ user: userId }).populate("items.product");

    if (!cart) {
      cart = await Cart.create({ user: userId, items: [] });
    }

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateCart = async (req, res) => {
  try {
    const userId = req.params.id;

    let cart = await Cart.findOne({ user: userId });

    if (!cart) {
      cart = await Cart.create({ user: userId, items: [] });
    }

    cart.items = req.body.items;
    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = { getCart, updateCart };
