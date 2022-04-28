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
    thumbnailImageId: number,
    normalImageIds: Array<number>
}

interface ProductDetailType {
    id: number,
    name: string,
    description: string,
    price: number,
    sort: string,
    stock: number,
    createDate: Date,
    updateDate: Date,
    isDeleted: string,
    imageIds: Array<number>
}

interface ListResponseType {
    data: Array<ProductType>,
    message: string,
    status: string
}

interface DetailResponseType {
    data: ProductDetailType,
    message: string,
    status: string
}

export type {
    ProductType,
    ProductDetailType,
    ListResponseType,
    DetailResponseType
}