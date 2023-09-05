import { combineReducers } from "redux";
import { productsList } from "./productsListReducer";
import { productDetails } from "./productDetailsReducer"
import { handleCart } from './handleCart';

export default combineReducers({
        productsList,
        productDetails,
        handleCart
    }
)