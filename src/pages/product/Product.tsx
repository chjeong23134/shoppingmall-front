
import './Product.scss';

import { Outlet, useNavigate } from "react-router-dom";

import Tab from "../../components/tab/Tab";

function Product() {
    const history = useNavigate();

    return (
        <div className="product">
            <Tab>
                <div className='link' onClick={() => history('add')}>
                    Add
                </div>

                <div className='link' onClick={() => history('list')}>
                    List
                </div>
            </Tab>
            <Outlet />
        </div>
    )
}

export default Product;