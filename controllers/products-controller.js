const createProduct = (request, response, next) => {
  // Controller
  console.log(request.body);

  response.json({
    message: "Success!",
  });
};

const listAllProducts = (req, res) => {
  console.log(req);
  // req.body
  // req.params
  res.json({
    message: "Hello World!",
  });
  // .json({})
  // .status(XXX)
};

module.exports = {
  createProduct,
  listAllProducts,
};
