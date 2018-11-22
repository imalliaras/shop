const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/product-list', { 
            prods: products, 
            pageTitle: 'All Products', 
            path: '/products' 
        });
    });
}

exports.getProduct = (req, res, next) => {
    const id = req.params.id;
    
    Product.getProductById(id, (product) => {
        res.render('shop/product-detail', { 
            product: product, 
            pageTitle: 'Product Details', 
            path: '/products' 
        });
    });
}

exports.getIndex = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/index', { 
            prods: products, 
            pageTitle: 'Shop', 
            path: '/'
        });
    });
};

exports.getCart = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/cart', { 
            pageTitle: 'Cart', 
            path: '/cart' 
        });
    });
};

exports.postCart = (req, res, next) => {
    const id = req.body.id;
    Cart.addProduct(id);
    res.redirect('/');
};

exports.getOrders = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/orders', { 
            pageTitle: 'Orders', 
            path: '/orders' 
        });
    });
};

exports.getCheckout= (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/cart', { 
            pageTitle: 'Checkout', 
            path: '/checkout' 
        });
    });
};