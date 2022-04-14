import './ProductItem.scss';

import moment from 'moment';

import { productApi } from '../../apis/productApi';


interface PropType {
    name: string,
    price: number,
    date: Date,
    thumbnailImageId: number
}

function ProductItem(prop: PropType) {
    return (
        <div className='product-item'>
            <div className='product-image'>
                <img src={productApi.imageDetail(prop.thumbnailImageId)}/>
            </div>

            <div className='product-name'>
                {prop.name}
            </div>

            <div className='product-price'>
                {prop.price}원
            </div>

            <div className='product-date'>
                {moment(prop.date).format('YYYY/MM/DD')}
            </div>
        </div>
    )
}

export default ProductItem;