import React from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import ProductContextProvider from './context/ProductContext';
import ScrollToTop from '../src/helpers/scrollToTop';
import Success from './pages/Success';
function App() {
	return (
		<div>
			<ProductContextProvider>
				<Router>
					<Header />
					<ScrollToTop>
						<Switch>
							<Route exact path='/'>
								<Home />
							</Route>
							<Route exact path='/checkout'>
								<Checkout />
							</Route>
							<Route path='/success'>
								<Success />
							</Route>
						</Switch>
					</ScrollToTop>
				</Router>
			</ProductContextProvider>
		</div>
	);
}

export default App;
