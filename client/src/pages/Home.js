import React from 'react';
import Hero from '../components/Hero';
import BestSellers from '../components/BestSellers';

import './styles.scss';

function Home() {
	return (
		<div className='home'>
			<Hero />
			<BestSellers />
		</div>
	);
}

export default Home;
