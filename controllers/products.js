const Product = require('../models/product');

// const products = [];

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', { 
        pageTitle: 'Add Product', 
        path: '/admin/add-product' 
    });
}

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    // products.push({ title: req.body.title });
    res.redirect('/');
}

exports.getProducts = (req, res, next) => {
    const products = Product.fetchAll();
    res.render('shop', { 
        prods: products, 
        pageTitle: 'My Shop', 
        path: '/' 
    });
}