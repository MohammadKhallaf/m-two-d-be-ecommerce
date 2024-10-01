const Product = require("../models/product-model");

// C-R-U-D

// Create Product
const createProduct = async (request, response) => {
  try {
    const newProduct = await Product.create(request.body);

    response.status(201).json(newProduct);
  } catch (error) {
    response.status(400).json({ error });
  }
};

// List All
const listAllProducts = async (req, res) => {
  try {
    const list = await Product.find({});

    // req.body
    // req.params
    res.status(200).json(list);
    // .json({})
    // .status(XXX)
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get one product -> ID
const getOneProduct = async (request, response) => {
  try {
    const id = request.params.id;
    const product = await Product.findById(id);
    // how to get that ID from client side ?
    // request.params.id
    // db <--> async
    if (!product) {
      response.status(404).send();
    }

    response.status(200).json(product);
  } catch (error) {
    response.status(500).json(error);
  }
};

// update
const updateProduct = async (request, response) => {
  try {
    const id = request.params.id;
    const product = await Product.findByIdAndUpdate(id, request.body, {
      new: true,
    });
    if (!product) {
      response.status(404).send();
    }
    response.status(200).json(product);
  } catch (error) {
    response.status(400).json(error);
  }
};

// delete
const deleteProduct = async (request, response) => {
  try {
    const id = request.params.id;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      response.status(404).send();
    }

    response.status(200).json({ message: "Delete!" });
  } catch (error) {
    response.status(500).json(error);
  }
};

module.exports = {
  createProduct,
  getOneProduct,
  listAllProducts,
  updateProduct,
  deleteProduct,
};
