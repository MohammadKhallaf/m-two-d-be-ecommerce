const express = require("express");
const router = express.Router();

const productsController = require("../controllers/products-controller");

router.post("/", productsController.createProduct);

router.get("/:id", productsController.getOneProduct);
router.get("/", productsController.listAllProducts);

router.patch("/:id", productsController.updateProduct);
router.delete("/:id", productsController.deleteProduct);

// PUT -> update
// PATCH -> partial update
module.exports = router;
