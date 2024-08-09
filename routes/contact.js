const express = require('express');
const router = express.Router();
const productController = require('../controllers/product');

router.get('/contact', productController.contact);
router.post('/success', productController.success)

module.exports = router;