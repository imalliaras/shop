const fs = require('fs');
const path = require('path');
const Product = require('./product');

const cartDataDir = path.join(path.dirname(process.mainModule.filename), 'data', 'cart.json');

module.exports = class Cart {
    static fetchAll(cb) {
        fs.readFile(cartDataDir, (err, data) => {
            if (err) {
                return cb([]);
            }
            const cart = JSON.parse(data);
            Product.fetchAll((products) => {
                const finalResult = cart.map((cartItem) => {
                    const found = products.find((product) => {
                        return product.id === cartItem.id;
                    });
                    return {...found, ...cartItem};
                });
                cb(finalResult);
            });
        });
    }

    static addProduct(product) {
        if (!fs.existsSync(cartDataDir)) {
            const cart = [];
            cart.push({ ...product, price: parseFloat(product.price), totalPrice: parseFloat(product.price), quantity: 1});
            fs.writeFile(cartDataDir, JSON.stringify(cart), (err) => {
                if (err) throw err;
                console.log('File created');
            });
        } else {
            fs.readFile(cartDataDir, (err, data) => {
                if (err) throw err;
                const cart = JSON.parse(data);
                const productIsFound = cart.findIndex((prod) => {
                    return prod.id === product.id;
                });
                if (productIsFound >= 0) {
                    cart[productIsFound].quantity += 1;
                    cart[productIsFound].totalPrice += cart[productIsFound].price;
                } else {
                    cart.push({ ...product, price: parseFloat(product.price), totalPrice: parseFloat(product.price), quantity: 1});
                }
                fs.writeFile(cartDataDir, JSON.stringify(cart), (err) => {
                    if (err) throw err;
                });
                
            });
        }
    }
}