import './ProductList.scss';

import React, { useEffect, useState } from 'react';

import { productApi } from '../../apis/productApi';

import ProductItem from '../../components/productItem/ProductItem';

interface ProductType {
    id: number,
    name: string,
    description: string,
    price: number,
    sort: string,
    stock: number,
    createDate: Date,
    updateDate: Date,
    isDeleted: string,
    thumbnailImageId: number
}

function ProductList() {
    const [products, setProducts] = useState<ProductType[]>();

    function setProductsBySort(sort: string) {
        productApi.listBySort(sort).then(res => setProducts(res.data));
    }

    useEffect(() => {
        setProductsBySort('test1');
    }, []);

    return (
        <div className='product-list'>
            <div className='filter-wrapper'>

            </div>

            <div className='list-wrapper'>
                {
                    products?.map((product, id) => {
                        return (
                            <ProductItem
                                key={id}
                                name={product.name}
                                price={product.price}
                                date={product.createDate}
                                thumbnailImageId={product.thumbnailImageId}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProductList