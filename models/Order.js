const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
	fullAddress: {
		firstName: {
			type: String
		},
		lastName: {
			type: String
		},
		address: {
			type: String
		},
		area: {
			type: String
		},
		state: {
			type: String
		},
		city: {
			type: String
		},
		zip: {
			type: String
		},
		phoneNumber: {
			type: String
		}
	},
	totalPrice: Number,
	products: []
});

module.exports = mongoose.model('Order', OrderSchema);
