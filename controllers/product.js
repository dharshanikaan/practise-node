const Product = require('../models/product'); // Adjust path if necessary

exports.getproduct = (req, res, next) => {
    res.render('add-product', { pageTitle: 'Add Product' });
};

exports.postproduct = (req, res, next) => {
    const title = req.body.title; // Adjust based on your form input name
    const product = new Product(title);
    product.save();
    res.redirect('/');
};

exports.getsub = (req, res, next) => {
    const products = Product.fetchAll();
    res.render('sub', { pageTitle: 'Subscription', products: products });
};

exports.contact = (req, res, next) => {
    res.render('contact', { pageTitle: 'Contact Us' });
};

exports.success = (req, res, next) => {
    console.log(req.body);
    res.render('success', { pageTitle: 'Success' });
};

exports.error = (req, res, next) => {
    res.status(404).render('err', { pageTitle: 'Page Not Found' });
};