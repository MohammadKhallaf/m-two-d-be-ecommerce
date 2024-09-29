const Product = require("../models/product-model");

// Create Product
const createProduct = async (request, response, next) => {
  const newProduct = await Product.create(request.body);

  response.json({
    message: "Success!",
    product: newProduct,
  });
};

const listAllProducts = async (req, res) => {
  const list = await Product.find({});
  console.log(req);
  // req.body
  // req.params
  res.json({
    message: "Hello World!",
    products: list,
  });
  // .json({})
  // .status(XXX)
};

module.exports = {
  createProduct,
  listAllProducts,
};
