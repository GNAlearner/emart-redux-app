import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants";

const cart = [];

export const handleCart = (state = cart, action) => {
    const product = action.payload;
    switch (action.type) {
        case ADD_TO_CART:
            const exist1 = state.find((x)=> x.id === product.id);
            if(exist1){
                return state.map((x)=>
                x.id === product.id ? {...x, qty: x.qty + 1}: x
                );
            }else{
                return [
                    ...state,
                    {
                        ...product,
                        qty: 1
                    }
                ]
            }

        case REMOVE_FROM_CART:
            const exist2 = state.find((x)=> x.id === product.id);
            if(exist2.qty === 1){
                return state.filter((x)=> x.id !== product.id );
            }else{
                return state.map((x)=>
                x.id === product.id ? {...x, qty: x.qty - 1}: x
                );
            }

        default:
            return state;
    }
}