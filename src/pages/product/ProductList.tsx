import './ProductList.scss';

import { useEffect, useState } from 'react';

import { productApi } from '../../apis/productApi';
import { ProductType } from '../../types/PropType';

import ProductItem from '../../components/productItem/ProductItem';

export default function ProductList() {
    const [products, setProducts] = useState<ProductType[]>();
    const [nameOrSort, setNameOrSort] = useState<string>('');
    const [select, setSelect] = useState<string>('NAME');
    let isLoading: Boolean = true;

    function setProductsByNameOrSort() {
        if(select === 'NAME') {
            productApi.listByName(nameOrSort)
                .then(res => {
                    if(isLoading === true) {
                        console.log(select + ', ' + nameOrSort);
                        setProducts(res.data)
                    }
                });
        }

        if(select === 'SORT') {
            productApi.listBySort(nameOrSort)
                .then(res => {
                    if(isLoading === true) {
                        console.log(select + ', ' + nameOrSort);
                        setProducts(res.data)
                    }
                });
        }
    }

    useEffect(() => {
        return (): void => {
            isLoading = false;
        }
    }, []);

    return (
        <div className='product-list'>
            <div className='filter-wrapper'>
                <select onChange={e => setSelect(e.target.value)}>
                    <option value="NAME">Name</option>
                    <option value="SORT">Sort</option>
                </select>
                <input onChange={e => setNameOrSort(e.target.value)}/>
                <button onClick={() => setProductsByNameOrSort()}>Search</button>
            </div>

            <div className='list-wrapper'>
                {
                    products?.map((product, id) => {
                        return (
                            <ProductItem
                                key={id}
                                id={product.id}
                                name={product.name}
                                sort={product.sort}
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