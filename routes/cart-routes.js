const express = require("express");
const router = express.Router();

const cartController = require("../controllers/cart-controller");

//
router.get("/:id", cartController.getCart);
router.put("/:id", cartController.updateCart);

//
module.exports = router;
