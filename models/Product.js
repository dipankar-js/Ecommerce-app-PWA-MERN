const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, 'Please add a title']
	},
	subtitle: {
		type: String,
		required: [true, 'Please add a subtitle']
	},
	price: {
		type: String,
		required: [true, 'Please add a price']
	},
	discount: {
		type: String,
		required: [true, 'Please add a discount']
	}
});

module.exports = mongoose.model('Product', ProductSchema);
