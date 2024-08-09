const path = require('path');

exports.getproduct = (req, res, next) => {
    res.render('add-product', { pageTitle: 'Add Product' }); // Ensure 'add-product.ejs' is in views folder
};

exports.postproduct = (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
};

exports.getsub = (req, res, next) => {
    res.render('sub', { pageTitle: 'Subscription' }); // Ensure 'sub.ejs' is in views folder
};

exports.contact = (req, res, next) => {
    res.render('contact', { pageTitle: 'Contact Us' }); // Ensure 'contact.ejs' is in views folder
};

exports.success = (req, res, next) => {
    console.log(req.body);
    res.render('success', { pageTitle: 'Success' }); // Ensure 'success.ejs' is in views folder
};

exports.error = (req, res, next) => {
    res.status(404).render('error', { pageTitle: 'Page Not Found' }); // Ensure '404.ejs' is in views folder
};