import React from 'react';
import PerfumeImage from '../../assets/perfume.png';

import './styles.scss';

function Hero() {
	return (
		<div className='hero-wrapper'>
			<div className='hero-content'>
				<p className='intro'>
					<span>Limited time Offer </span> <br />
					Shop Bath & Ritual at AED/SAR 500,
					<br />
					Retail price AED/SAR 800
				</p>
			</div>
			<div className='hero-image'>
				<img src={PerfumeImage} alt='Banner' />
			</div>
		</div>
	);
}

export default Hero;
