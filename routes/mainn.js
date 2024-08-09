const express = require('express');
const router = express.Router();
const productController = require('../controllers/product');

router.get('/add-product', productController.getproduct);
router.post('/product', productController.postproduct);

module.exports = router;