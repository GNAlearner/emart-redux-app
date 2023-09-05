import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addToCart, removeFromCart } from '../state/actions/actions'

class Cart extends Component {

    render() {
        const { cartData } = this.props;
        return (
            <>
                {cartData.length ? cartData.map((product) => (
                    <div className="px-4 py-5 bg-light border" key={product.key}>
                        <div className="container py-4">
                            <div className="row justify-content-center">
                                <div className="col-md-4">
                                    <img src={product.image} alt={product.title} height={200} width={180} />
                                </div>
                                <div className="col-md-4">
                                    <h3>{product.title}</h3>
                                    <p className="lead fw-bold">$ {product.price}</p>
                                    <button onClick={() => this.props.removeFromCart(product)} className="btn btn-outline-dark me-4"> - </button>
                                    <span className="h4">{product.qty}</span>
                                    <button onClick={() => this.props.addToCart(product)} className="btn btn-outline-dark ms-4"> + </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )) : <div className="px-4 py-5 bg-light" >
                    <div className="container py-4">
                        <div className="row">
                            <h3>Your Cart is Empty</h3>
                        </div>
                    </div>
                </div>}
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    cartData: state.handleCart
});

const mapDispatchToProps = {
    addToCart,
    removeFromCart
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
