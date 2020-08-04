import React, { useContext, useState } from 'react';
import { ReactComponent as AddIcon } from '../../assets/add.svg';
import './styles.scss';
import { AppContext } from '../../context/ProductContext';
import { Link } from 'react-router-dom';

export default function Card({ ID, image, subtitle, title, price, discount }) {
	const [qty, setQty] = useState(0);
	const { addToCart, removeFromCart } = useContext(AppContext);

	const AddToCart = () => {
		addToCart(ID);
		setQty(qty + 1);
	};
	const handleRemove = () => {
		removeFromCart(ID);
		setQty(qty - 1);
	};
	return (
		<div className='card-wrapper'>
			<div className='product-image'>
				<img src={image} alt='bestsellers' />
			</div>
			<div className='product-info'>
				<p className='product-subtitle'>{subtitle}</p>
				<p className='product-title'> {title} </p>
				<p className='product-price'>
					{' '}
					${price} <span> {discount} </span>
				</p>
				<div className='add-to-cart'>
					{qty ? (
						<div className='quantity-container'>
							<div className='decrement' onClick={handleRemove}>
								&#x2212;
							</div>
							<span className='qty'>{qty}</span>
							<div className='increment' onClick={AddToCart}>
								&#x271A;
							</div>
						</div>
					) : (
						<>
							<div className='text' onClick={AddToCart}>
								Add to Cart
							</div>
							<div className='symbol'>
								<AddIcon />
							</div>
						</>
					)}
				</div>
				<div className='add-to-cart'>
					{qty && (
						<>
							<div className='text'>
								{' '}
								<Link to='/checkout'>Checkout </Link>{' '}
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	);
}
