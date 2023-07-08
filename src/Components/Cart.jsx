import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addCart, delCart } from '../redux/action';

const Cart = () => {
    const state = useSelector((state) => state.handleCart);

    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addCart(product));
    }
    const delProduct = (product) => {
        dispatch(delCart(product));
    }

    const increase = (product) => {
        addProduct(product);
    }

    const decrease = (product) => {
        delProduct(product);
    }

    return (
        <>
            <div>
                {!state.length ? <h2 style={{ marginLeft: "120px", marginTop: "100px" }}>Your cart is Empty</h2> :
                    <div className="container py-5">
                        {state.map((product) => {
                            return (
                                <div className="row px-5 py-5">
                                    <div className="col-md-4">
                                        <img src={product.image} alt={product.title}
                                            height="200px" width="180px"
                                            style={{display: "flex", justifyContent: "center"}}/>
                                    </div>
                                    <div className="col-md-6">
                                        <h3>{product.title}</h3>
                                        <p className="lead fw-bold">
                                            {product.qty} X ${product.price} = ${(product.qty * product.price).toFixed(2)}
                                        </p>
                                        <button className="btn btn-outline-dark me-4"
                                            onClick={() => decrease(product)}>
                                            <i className="fa fa-minus"></i>
                                        </button>
                                        <button className="btn btn-outline-dark me-4"
                                            onClick={() => increase(product)}>
                                            <i className="fa fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                            )
                        }
                        )}
                    </div>
                }
            </div>
        </>
    )
}

export default Cart