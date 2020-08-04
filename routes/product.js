const express = require('express');
const Product = require('../models/Product');

const router = express.Router();

// @desc   Create Product
// @route  POST /api/products
// @access Public
router.post('/', async (req, res) => {
	try {
		const product = await Product.create(req.body);
		res.status(201).json({
			success: true,
			data: product
		});
	} catch (error) {
		res.status(200).json({
			success: false,
			message: error.message
		});
	}
});

// @desc   GET Products
// @route  GET /api/products
// @access Public
router.get('/', async (req, res) => {
	try {
		const products = await Product.find({});
		res.status(200).json({
			success: true,
			data: products
		});
	} catch (error) {
		res.status(200).json({
			success: false,
			message: error.message
		});
	}
});

module.exports = router;
