import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

function Header() {
	return (
		<div className='header-wrapper'>
			<div className='logo'>
				<Link to='/'>SCENTIO </Link>
			</div>
			<div className='menu'>
				<ul>
					<li>
						<Link to='/'>HOME </Link>
					</li>
					<li>PERFUMES</li>
					<li>ACCESSORIES</li>
					<li>COSTMETICS</li>
				</ul>
			</div>
		</div>
	);
}

export default Header;
