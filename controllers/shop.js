const Product = require('../models/product');

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
        console.log('product', product);
        res.render('shop/product-detail', { 
            prods: product, 
            pageTitle: 'Product Details', 
            path: '/product' 
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