import { takeEvery, put } from 'redux-saga/effects'
import { SET_PRODUCT_LIST, FETCH_PRODUCT_LIST, FETCH_PRODUCT_DETAILS, SET_PRODUCT_DETAILS } from '../constants';

function* getProducts() {
    let data = yield fetch('https://fakestoreapi.com/products')
    data = yield data.json();
    yield put({
        type: SET_PRODUCT_LIST,
        payload: data
    });
}

function* getProductDetails(id) {
    let data = yield fetch(`https://fakestoreapi.com/products/${id.payload}`)
    data = yield data.json();
    yield put({
        type: SET_PRODUCT_DETAILS,
        payload: data
    });
}

function* productsSaga() {
    yield takeEvery(FETCH_PRODUCT_LIST, getProducts);
    yield takeEvery(FETCH_PRODUCT_DETAILS, getProductDetails);
}

export default productsSaga;