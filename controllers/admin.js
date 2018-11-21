const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product', { 
        pageTitle: 'Add Product', 
        path: '/admin/add-product' 
    });
}

exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const image = req.body.image;
    const price = req.body.price;
    const description = req.body.description;
    console.log('image', image)
    const product = new Product(title, image, price, description);
    product.save();
    res.redirect('/');
}

exports.getProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('admin/product-list', { 
            prods: products, 
            pageTitle: 'Admin Products', 
            path: 'admin/product-list' 
        });
    });
}