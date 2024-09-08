const fs = require("fs").promises;
const path = require("path");

// simulate -> DB
// file system -> json

// 1- read from fs -> JS code
// ........... { CRUD } ............
// 2- write to fs <- JS code
//
//

const filePath = path.join(__dirname, "products.json");

// container for the data
// change the data within the container
// expose the container as controller

class ProductsManager {
  constructor() {
    this.products = [];
  }
  /*---------- file system ---------------*/

  async loadProducts() {
    const products = await fs.readFile(filePath, "utf-8");
    this.products = products;
  }

  async saveProducts() {
    await fs.writeFile(filePath, JSON.stringify(this.products));
  }

  /*---------- /file system ---------------*/
  // CRUD
  // Read
  async getAll() {
    return this.products;
  }
}
