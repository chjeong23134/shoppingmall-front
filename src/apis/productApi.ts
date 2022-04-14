import axios from "axios";

const ip = 'http://localhost:8080/product';

interface ResponseType {
    data: Array<ProductType>,
    message: string,
    status: string
}

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

function add(
    name: string,
    description: string,
    price: number,
    sort: string,
    stock: number,
    thumbnailImage: File,
    normalImages: FileList
) {
    const formData = new FormData();
    const json = JSON.stringify({
        'name': name,
        'description': description,
        'price': price,
        'sort': sort,
        'stock': stock
    });
    const blob = new Blob([json], {
        type: "application/json"
    });

    formData.append('req', blob);
    formData.append('thumbnailImage', thumbnailImage);
    for(const image in normalImages) {
        formData.append('normalImages', normalImages[image]);
    }

    axios({
        url: ip + '/add',
        method: 'post',
        data: formData
    });
}

function listBySort(sort: string): Promise<ResponseType> {
    return axios({
        url: ip + '/list-sort/' + sort
    }).then(res => res.data);
}

function imageDetail(id: number): string {
    // axios({
    //     url: ip + '/image/' + id
    // });
    return ip + '/image/' + id;
}

export const productApi = {
    add,
    listBySort,
    imageDetail
}