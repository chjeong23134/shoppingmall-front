import axios from "axios";
import { DetailResponseType, ListResponseType } from "../types/PropType";

const ip = 'http://localhost:8080/product';

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

function listByName(name: string): Promise<ListResponseType> {
    return axios({
        url: ip + '/list-name/' + name
    }).then(res => res.data);
}

function listBySort(sort: string): Promise<ListResponseType> {
    return axios({
        url: ip + '/list-sort/' + sort
    }).then(res => res.data);
}

function detail(id: number): Promise<DetailResponseType> {
    return axios({
        url: ip + '/detail/' + id
    }).then(res => res.data);
}

function imageDetail(id: number): string {
    return ip + '/image/' + id;
}

export const productApi = {
    add,
    listBySort,
    listByName,
    detail,
    imageDetail
}