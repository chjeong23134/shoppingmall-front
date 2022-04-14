import './ProductAdd.scss';

import React, { useState } from 'react';

import { productApi } from '../../apis/productApi';

function ProductAdd() {
    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [price, setPrice] = useState<number>(0);
    const [sort, setSort] = useState<string>('');
    const [stock, setStock] = useState<number>(0);
    const [thumbnailImage, setThumbnailImage] = useState<FileList | null>(null);
    const [normalImages, setNormalImages] = useState<FileList | null>(null);

    function handleSubmit() {
        if(thumbnailImage !== null && normalImages !== null) {
            productApi.add(name, description, price, sort, stock, thumbnailImage[0], normalImages);
        }
    }

    return (
        <div className="product-add">
            <div className='label-wrapper'>
                <label>Name</label>
                <input maxLength={45} onChange={e => setName(e.target.value)}/>
            </div>

            <div className='label-wrapper'>
                <label>Description</label>
                <textarea className='description-input' maxLength={200} onChange={e => setDescription(e.target.value)}/>
            </div>

            <div className='small-input-wrapper'>
                <div className='label-wrapper'>
                    <label>Price</label>
                    <input type='number' onChange={e => setPrice(e.target.valueAsNumber)}/>
                </div>

                <div className='label-wrapper'>
                    <label>Sort</label>
                    <input maxLength={15} onChange={e => setSort(e.target.value)}/>
                </div>

                <div className='label-wrapper'>
                    <label>Stock</label>
                    <input type='number' onChange={e => setStock(e.target.valueAsNumber)}/>
                </div>
            </div>

            <div className='label-wrapper'>
                <label>ThumbnailImage</label>
                <input type='file' accept='image/png, image/jpe, image/jpeg' onChange={e => setThumbnailImage(e.target.files)}/>
            </div>

            <div className='label-wrapper'>
                <label>NormalImage</label>
                <input type='file' accept='image/png, image/jpe, image/jpeg' onChange={e => setNormalImages(e.target.files)} multiple/>
            </div>

            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default ProductAdd;