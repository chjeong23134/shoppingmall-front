import './Product.scss';

import { Outlet, Route, useNavigate } from "react-router-dom";

import { RouteType } from '../../types/RouteType';
import Tab from "../../components/tab/Tab";

export default function Product() {
    const history = useNavigate();

    return (
        <div className="product">
            <Tab>
                <div className='link' onClick={() => history(RouteType.PRODUCTADD)}>
                    Add
                </div>

                <div className='link' onClick={() => history(RouteType.PRODUCTLIST)}>
                    List
                </div>
            </Tab>
            <Outlet />
        </div>
    )
}