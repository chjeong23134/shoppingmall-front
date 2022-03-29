import React from 'react';
import './App.scss';
import {
	BrowserRouter as Router,
	Routes,
	Route
} from "react-router-dom";

import Product from './page/product/Product';

function App() {
	return (
		<Router>
			<div>
				<Routes>
					<Route path="/product" element={<Product/>}/>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
