const express = require("express");
const router = express.Router();

const productsController = require("../controllers/products-controller");

router.post("/", productsController.createProduct);

router.get("/", productsController.listAllProducts);

module.exports = router;
