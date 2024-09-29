// entry point
// express -> server ( request | response )

const express = require("express");
const productsController = require("./controllers/products-controller");

const app = express();

//
app.use(express.json());

// json -> JS

// app.METHOD
app.post("/", productsController.createProduct);

app.get("/", productsController.listAllProducts);

app.listen(3000, () => {
  console.log(`Example app listening on port 3000`);
});
