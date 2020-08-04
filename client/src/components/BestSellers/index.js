import React, { useContext } from 'react';
import Card from '../Card';
import Perfume1 from '../../assets/product1.png';
import Perfume2 from '../../assets/product2.png';
import Perfume3 from '../../assets/product3.png';
import Perfume4 from '../../assets/product4.png';

import './styles.scss';
import { AppContext } from '../../context/ProductContext';

const productImages = [Perfume1, Perfume2, Perfume3, Perfume4];
function BestSellers() {
	const { AllProducts } = useContext(AppContext);

	if (!window.navigator.onLine) {
		return <p className='offline-mode'>Go Online too see the products.</p>;
	}
	return (
		<div className='best-sellers'>
			<h1 className='best-sellers-heading'> BEST SELLERS</h1>
			<div className='products'>
				{AllProducts.length > 0 ? (
					AllProducts.map((product, index) => {
						return (
							<Card
								key={product._id}
								ID={product._id}
								image={productImages[index]}
								subtitle={product.subtitle}
								title={product.title}
								price={product.price}
								discount={product.discount}
							/>
						);
					})
				) : (
					<p className='loading'>Loading Products</p>
				)}
			</div>
		</div>
	);
}

export default BestSellers;
