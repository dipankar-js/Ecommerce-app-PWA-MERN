import React from 'react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

export default function Fallback() {
	return (
		<div className='fallback'>
			<h5 className='fallback-header'>OOPS!</h5>
			<p className='fallback-content'>
				Currently you can't view this page without a connection.
			</p>
			<Link to='/'>
				<Button
					buttonText='Go back to Home'
					buttonType='filled'
					className='medium label-6'
				/>
			</Link>
		</div>
	);
}
