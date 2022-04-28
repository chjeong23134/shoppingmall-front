import './ProductDetail.scss';

import { useEffect, useState } from 'react';

import { ProductDetailType } from '../../types/PropType';
import { productApi } from '../../apis/productApi';

interface PropType {
    id: number
}

export default function ProductDetail(prop: PropType) {
    const [product, setProduct] = useState<ProductDetailType>();

    useEffect(() => {
        let isLoading = true;

        productApi.detail(prop.id)
            .then(res => {
                    if(isLoading === true) {
                        setProduct(res.data);
                    }
                });

        return (): void => {
            isLoading = false;
        }
    }, [prop.id]);

    return (
        <div className='product-detail'>
            <div className='label-wrapper'>
                <label>[ Name ]</label>
                <div className='product-name'>{product?.name}</div>
            </div>

            <div className='label-wrapper'>
                <label>[ Description ]</label>
                <div className='product-description'>                                                                                                                                                                                                                                                                                                   </div>
            </div>

            <div className='row-wrapper'>
                <div className='label-wrapper'>
                    <label>[ Price ]</label>
                    <div className='product-price'>{product?.price}</div>
                </div>

                <div className='label-wrapper'>
                    <label>[ Sort ]</label>
                    <div className='product-sort'>{product?.sort}</div>
                </div>

                <div className='label-wrapper'>
                    <label>[ Stock ]</label>
                    <div className='product-stock'>{product?.stock}</div>
                </div>
            </div>

            <label>[ Images ]</label>
            <div className='image-wrapper'>
                {
                    product
                        ?
                            product.imageIds.map((imageId, id) => {
                                return (
                                    <div className='product-image' key={id}>
                                        <img src={productApi.imageDetail(imageId)} />
                                    </div>
                                );
                            })
                        : null
                }
            </div>
        </div>       
    );
}