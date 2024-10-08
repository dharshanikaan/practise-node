const express = require('express');
const router = express.Router();
const productController = require('../controllers/product');

router.use(productController.error);

module.exports = router;