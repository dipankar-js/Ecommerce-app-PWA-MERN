import React from 'react';

export default function Success() {
	return (
		<div className='success'>
			<div className='card'>
				<div className='card-box'>
					<i className='checkmark'>✓</i>
				</div>
				<h1 className='success-heading'>Success</h1>
				<p className='success-info'>
					We received your purchase request;
					<br /> we'll be in touch shortly!
				</p>
			</div>
		</div>
	);
}
