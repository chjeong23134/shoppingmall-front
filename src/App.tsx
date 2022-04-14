import './App.scss';

import {
	BrowserRouter as Router,
	Routes,
	Route,
	useNavigate
} from "react-router-dom";

import Nav from './components/nav/Nav';
import Tab from './components/tab/Tab';

import Product from './pages/product/Product';
import ProductAdd from './pages/product/ProductAdd';
import ProductList from './pages/product/ProductList';

function App() {
	const history = useNavigate();

	return (
		<div className='app'>
			<Nav />
			<Tab>
				<div className='link' onClick={() => history('product')}>
					Product
				</div>

				<div className='link' onClick={() => history('user')}>
					User
				</div>
			</Tab>

			<Routes>
				<Route path='product' element={<Product />}>
					<Route path='add' element={<ProductAdd />} />
					<Route path='list' element={<ProductList />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
