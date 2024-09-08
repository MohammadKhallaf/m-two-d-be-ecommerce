const ProductsManager = require("./product-manager");

const manager = new ProductsManager();

async function getAllProducts() {
  const products = await manager.getAll();
  console.log(products);
}
async function getOneProduct() {
  const product = await manager.getOne("fan");
  console.log(product);
}
getOneProduct();
