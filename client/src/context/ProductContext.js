import React, { createContext, useState, useEffect } from 'react';
import { products } from '../config/Products.json';
import axios from 'axios';

export const AppContext = createContext();

const ProductContextProvider = (props) => {
	const [AllProducts, setAllProducts] = useState([]);
	const [cartItems, setCartItems] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0);

	const addToCart = (id) => {
		let newProduct = AllProducts.find((item) => item._id === id);
		setTotalPrice(totalPrice + parseInt(newProduct.price));

		let existingProduct = cartItems.find((item) => item._id === id);
		if (existingProduct) {
			console.log(existingProduct);
			existingProduct.qty = existingProduct.qty + 1;
			let cart = cartItems.filter((item) => item._id !== id);

			setCartItems([...cart, existingProduct]);
			return;
		}
		let cart = AllProducts.filter((product) => product._id === id);
		cart[0].qty = 1;
		setCartItems([...cartItems, ...cart]);
	};

	const removeFromCart = (id) => {
		let existingProduct = cartItems.find((item) => item._id === id);

		if (existingProduct.qty === 1) {
			let cart = cartItems.filter((item) => item._id !== id);
			setCartItems([...cart]);
			return;
		}
		existingProduct.qty = existingProduct.qty - 1;
		let cart = cartItems.filter((item) => item._id !== id);
		setCartItems([...cart, existingProduct]);
	};

	useEffect(() => {
		fetchProducts();
	});

	const fetchProducts = async () => {
		let response = await axios.get('http://localhost:5000/api/products');
		setAllProducts(response.data.data);
	};
	return (
		<AppContext.Provider
			value={{ AllProducts, cartItems, addToCart, removeFromCart, totalPrice }}
		>
			{props.children}
		</AppContext.Provider>
	);
};

export default ProductContextProvider;
