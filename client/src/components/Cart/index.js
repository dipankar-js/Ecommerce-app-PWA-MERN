import React, { useContext } from 'react';

import CartItem from '../CartItem';

import { AppContext } from '../../context/ProductContext';

import './styles.scss';

function Cart(props) {
	const { cartItems, totalPrice } = useContext(AppContext);

	return (
		<div className='cart'>
			<div className='heading-block'>
				<h2 className='cart-heading'>My Cart</h2>
				<div className='no-of-items'>{cartItems.length} Item(s)</div>
			</div>
			<div className='divider'></div>
			<div className='cart-items'>
				{cartItems.map((product, index) => (
					<CartItem key={product._id} product={product} index={index} />
				))}
			</div>
			<div className='divider'></div>
			<div className='expense-details'>
				<div className='expense-row'>
					<div className='expense-name'>Total</div>
					<div className='expense-amount'>
						<span> Rs.{totalPrice}</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Cart;
