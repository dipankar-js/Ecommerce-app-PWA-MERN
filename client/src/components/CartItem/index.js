import React, { Component, useContext } from 'react';
import { AppContext } from '../../context/ProductContext';
import Perfume from '../../assets/product1.png';

import './styles.scss';

function CartItem(props) {
	const { _id, subtitle, title, price, discount, qty } = props.product;
	const { cartItems, addToCart, removeFromCart } = useContext(AppContext);

	const incrementQuantity = (_id) => {
		addToCart(_id);
	};

	const decrementQuantity = (_id) => {
		removeFromCart(_id);
	};

	// const removeFromCart = id => {
	//     dispatch({
	//         "type": "REMOVE_FROM_CART",
	//         "key": "cartProducts",
	//         "value": id
	//     })
	// }

	return (
		<div className='cart-item'>
			<div className='index'>{props.index + 1}</div>
			<div className='image-container'>
				<img className='product-image' alt={subtitle} src={Perfume} />
			</div>
			<div className='details-container'>
				<div className='name'>{title}</div>
				<div className='quantity'>{qty}</div>
			</div>
			<div className='price-container'>
				<div className='discount-banner'>{discount}</div>
				<div className='price'>Rs.{parseInt(price) * qty}</div>
			</div>
			<div className='close-button-container'>
				<div className='close-btn'>&#x2716;</div>
			</div>
		</div>
	);
}

export default CartItem;

// What to do, once already added to cart;
