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
    constructor(title, image, price, description) {
        this.title = title;
        this.image = image;
        this.price = price;
        this.description = description;
    }

    save() {
        this.id= Math.random().toString();
        getProductsFromFile((products) => {
            products.push(this);
            fs.writeFile(productsDataDir, JSON.stringify(products), (err) => {
                console.log('err', err);
            });
        });
    }

    static getProductById(id, cb) {
        getProductsFromFile((products) => {
            const product = products.find(product => product.id === id);
            cb(product);
        });
    }

    static fetchAll(cb) {
        getProductsFromFile(cb);
    }
}