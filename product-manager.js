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
    console.log("Run loading function");
    const products = await fs.readFile(filePath, "utf-8");
    this.products = JSON.parse(products);
  }

  async saveProducts() {
    await fs.writeFile(filePath, JSON.stringify(this.products));
  }

  /*---------- /file system ---------------*/

  // CRUD

  // Read
  async getAll() {
    await this.loadProducts();
    //
    return this.products;
  }

  async getOne(title) {
    await this.loadProducts();
    console.log(typeof this.products);
    const idx = this.products.findIndex((item) => {
      return item.title === title;
      // boolean --> comparison
    });

    return this.products[idx];

    // .find

    // .findIndex
  }
  // async;
}

module.exports = ProductsManager;
