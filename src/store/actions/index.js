import { ADD_PRODUCT, REMOVE_PRODUCT } from '../constants/action-types';

export function addProduct(payload) {
    return { type: ADD_PRODUCT, payload };
}

export function removeProduct(payload) {
    return { type: REMOVE_PRODUCT, payload };
}
