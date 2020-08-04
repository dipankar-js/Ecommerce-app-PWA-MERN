import React, { useContext, useState } from 'react';
import classnames from 'classnames';
import Button from '../Button';
import { useHistory } from 'react-router-dom';

import './style.scss';

import AddAddressForm from '../AddAddressForm';

import { withRouter } from 'react-router';
import { AppContext } from '../../context/ProductContext';
import axios from 'axios';

function CheckoutDetails(props) {
	const history = useHistory();
	const { cartItems, totalPrice } = useContext(AppContext);
	const [savedAddresses, setSavedAddresses] = useState([]);
	const [showing, setShowing] = useState('');
	const [offline, setOffline] = useState(false);

	const [error, setError] = useState('');

	const onAddressSubmit = (data) => {
		if (
			data.address === '' ||
			data.firstName === '' ||
			data.phoneNumber === '' ||
			data.zip === ''
		) {
			setError('Please fill  up the form correctly');
			return;
		}
		setSavedAddresses(data);
		setShowing('payment');
	};

	const _onSubmit = async () => {
		if (!window.navigator.onLine) {
			setOffline(!offline);
			return;
		}
		console.log(cartItems);
		console.log(savedAddresses);

		let order = {
			fullAddress: savedAddresses,
			products: cartItems,
			totalPrice: totalPrice
		};

		let response = await axios.post('/api/orders', order);

		console.log(response);
		history.push('/success');
	};

	return (
		<div className='checkout-details'>
			<div
				className={classnames('delivery-address', showing !== '' && 'hidden')}
			>
				<div className='design-numbers'>
					<div className='serial-number-container'>
						<div className='serial-num label-7'>1</div>
					</div>
					<div className='delivery-heading label-5'>Delivery Address</div>
				</div>
				<AddAddressForm
					onAddressSubmit={onAddressSubmit}
					showing={showing}
					// onBack={onBack}
				/>
				{error && <p className='empty-cart'> {error} </p>}
			</div>
			<div className={classnames('payment', showing !== 'payment' && 'hidden')}>
				<div className='design-numbers'>
					<div className='serial-number-container'>
						<div className='serial-num label-7'>2</div>
					</div>
					<div className='delivery-heading label-7'>Payment</div>
				</div>
				<div className='payment-gateways-wrapper' id='pay-gate'>
					<div className='payment-gateways'>
						<input
							type='radio'
							id='card'
							className='payment-radio'
							value='card'
							name='payment'
						/>
						<label htmlFor='card'>Card on Delivery</label>
						<br />
						<input
							type='radio'
							id='cash'
							className='payment-radio'
							value='cash'
							name='payment'
						/>
						<label htmlFor='cash'>Cash on Delivery</label>
						<br />
					</div>
					<Button
						buttonText='Place Order'
						buttonType='filled'
						className='medium label-6'
						onClick={_onSubmit}
					/>
					{offline && (
						<p className='empty-cart'>
							{' '}
							Your are offline.Place your order once you are online{' '}
						</p>
					)}
				</div>
			</div>
		</div>
	);
}

CheckoutDetails.propTypes = {};

export default withRouter(CheckoutDetails);
