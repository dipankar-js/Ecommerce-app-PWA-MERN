const express = require('express');
const Order = require('../models/Order');

const router = express.Router();

// @desc   Place Order
// @route  POST /api/orders
// @access Public
router.post('/', async (req, res) => {
	try {
		const order = await Order.create(req.body);
		res.status(201).json({
			success: true,
			data: order
		});
	} catch (error) {
		res.status(200).json({
			success: false,
			message: error.message
		});
	}
});

module.exports = router;
