const fs = require('fs');
const path = require('path');

const productsDataDir = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');

const getProductsFromFile = (cb) => {
    fs.readFile(productsDataDir, (err, data) => {
        if (err) {
            return cb([]);
        }
        cb(JSON.parse(data));
    });
};

module.exports = class Product {
    constructor(title) {
        this.title = title;
    }

    save() {
        getProductsFromFile((products) => {
            products.push(this);
            fs.writeFile(productsDataDir, JSON.stringify(products), (err) => {
                console.log('err', err);
            });
        });
    }

    static fetchAll(cb) {
        getProductsFromFile(cb);
    }
}