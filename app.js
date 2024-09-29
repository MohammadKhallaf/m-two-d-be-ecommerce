// entry point
// express -> server ( request | response )

const express = require("express");
const mongoose = require("mongoose");
const productsRoutes = require("./routes/products-routes");
const app = express();

mongoose.connect("mongodb://localhost:27017/m2d-commerce");
mongoose.connection.on("connected", () => console.log("Connected to MongoDB"));

// Router middleware
app.use(express.json());

// json -> JS

// app.METHOD

// router middleware
app.get("/", (req, res) => {
  res.json({ message: "Success!" });
});

app.use("/products", productsRoutes);

// app.use('/user',usersRoutes)
// borg/industrial/ind-4
app.listen(3000, () => {
  console.log(`Example app listening on port 3000`);
});
