import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class ShowProducts extends Component {

    render() {
        const {products} = this.props;
        return (
            <>
                {products.map((product) => {
                    return (
                        <div className="col-md-3 mb-4" key={product.id}>
                            <div className="card">
                                <img src={product.image} className="card-img-top" alt={product.title} height="250px" />
                                <div className="card-body">
                                    <h5 className="card-title mb-0">{product.title.substring(0, 12)}...</h5>
                                    <p className="card-text lead fw-bold">
                                        ${product.price}
                                    </p>
                                    <NavLink to={`/product/${product.id}`} className="btn btn-outline-dark">Buy Now</NavLink>
                                </div>
                            </div>
                        </div>
                    )
                })
                }
            </>
        )
    }
}
