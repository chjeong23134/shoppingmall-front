import './ProductItem.scss';

import { useState } from 'react';
import moment from 'moment';

import { productApi } from '../../apis/productApi';

import ProductDetail from '../../pages/product/ProductDetail';
import Modal from '../modal/Modal';
import ProductModify from '../../pages/product/ProductModify';

interface PropType {
    id: number,
    name: string,
    sort: string,
    price: number,
    date: Date,
    thumbnailImageId: number
}

enum ModalType {
    DETAIL,
    MODIFY
}

export default function ProductItem(prop: PropType) {
    const [showModal, setShowModal] = useState<Boolean>(false);
    const [modalType, setModalTpye] = useState<ModalType>(ModalType.DETAIL);
    
    return (
        <div className='product-item' onClick={() => {setShowModal(true)}}>
            {
                showModal
                    ?
                        (
                            <Modal closeModal={() => setShowModal(false)}>
                                {
                                    modalType === ModalType.DETAIL
                                        ? (
                                            <ProductDetail
                                                id={prop.id}
                                            />
                                        )
                                        : modalType === ModalType.MODIFY
                                            ? (
                                                <ProductModify
                                                    id={prop.id}
                                                />
                                            )
                                            : null
                                }
                            </Modal>
                        )
                    : null
            }
            
            <div className='product-sort'>
                {prop.sort}
            </div>
            
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