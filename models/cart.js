const fs = require('fs');
const path = require('path');

const cartDataDir = path.join(path.dirname(process.mainModule.filename), 'data', 'cart.json');

module.exports = class Cart {
    static addProduct(id) {
        console.log(id);
        // Analyze cart / find existing product
        // Add new product / increase quantity
    }
}