// entry point
// express -> server ( request | response )

const express = require("express");

const productsRoutes = require("./routes/products-routes");
const app = express();

// Router middleware
app.use(express.json());

// json -> JS

// app.METHOD
// app.post("/", productsController.createProduct);

// app.get("/", productsController.listAllProducts);

// router middleware
app.use("/products", productsRoutes);

app.listen(3000, () => {
  console.log(`Example app listening on port 3000`);
});
