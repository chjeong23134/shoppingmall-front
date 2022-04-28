import './App.scss';

import {
	Routes,
	Route,
	useNavigate
} from "react-router-dom";

import Nav from './components/nav/Nav';
import Tab from './components/tab/Tab';

import Product from './pages/product/Product';
import ProductAdd from './pages/product/ProductAdd';
import ProductList from './pages/product/ProductList';
import { RouteType } from './types/RouteType';

export default function App() {
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
				<Route path={RouteType.PRODUCT} element={<Product />}>
					<Route path={RouteType.PRODUCTADD} element={<ProductAdd />}/>
					<Route path={RouteType.PRODUCTLIST} element={<ProductList />}/>
				</Route>
				<Route path={RouteType.USER} element={<div/>}/>
			</Routes>
		</div>
	);
}