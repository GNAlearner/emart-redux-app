import { SET_PRODUCT_DETAILS } from "../constants";
const initialState = {
    loading: true,
    details: null
}

export const productDetails = (state = initialState, action) => {

    switch (action.type) {
        case SET_PRODUCT_DETAILS:
            return {
                loading: false,
                details: action.payload
            }
        default:
            return state;
    }
}