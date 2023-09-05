import { ADD_TO_CART, FETCH_PRODUCT_DETAILS, FETCH_PRODUCT_LIST, REMOVE_FROM_CART } from "../constants"

export const fetchProducts = () => {
    return {
        type: FETCH_PRODUCT_LIST
    }
}

export const fetchProductDetails = (id) => {
    return {
        type: FETCH_PRODUCT_DETAILS,
        payload: id
    }
}

export const addToCart = (product) => {
    return {
        type: ADD_TO_CART,
        payload: product
    }
}

export const removeFromCart = (product) => {
    return {
        type: REMOVE_FROM_CART,
        payload: product
    }
}