import React from 'react';
import Cart from '../components/Cart';
import CheckoutDetails from '../components/CheckoutDetails';
import { withRouter } from 'react-router-dom';

import './styles.scss';

export default function Checkout() {
	return (
		<div className='checkout-page'>
			<div className='details-block'>
				<CheckoutDetails />
			</div>
			<div className='cart-block'>
				<Cart />
			</div>
		</div>
	);
}
