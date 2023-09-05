import { SET_PRODUCT_LIST } from "../constants";

const initialState = {
    loading: true,
    products: []
}

export const productsList = (state = initialState, action) => {

    switch (action.type) {
        case SET_PRODUCT_LIST:
            return {
                loading: false,
                products: [...action.payload]
            }
        default:
            return state;
    }
}