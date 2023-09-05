import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchProductDetails, addToCart } from '../state/actions/actions';
import LoadingProductDetails from './LoadingProductDetails';

class ProductDetails extends Component {

    addProductToCart = () => {
        const product = this.props.details;
        this.props.addToCart(product);
    }

    componentDidMount() {
        const { id } = this.props.params;
        this.props.fetchProductDetails(id);
    }

    render() {
        return (
            <div className="container py-5">
                <div className="row py-2">
                    {this.props.loading ? <LoadingProductDetails /> :
                        <>
                            <div className="col-md-6">
                                <img src={this.props.details.image} alt={this.props.details.title} height="400px" width="400px" />
                            </div>
                            <div className="col-md-6">
                                <h4 className="text-uppercase text-black-50">
                                    {this.props.details.category}
                                </h4>
                                <h1 className="display-5">
                                    {this.props.details.title}
                                </h1>
                                <p className="lead fw-bolder">
                                    Rating {this.props.details.rating && this.props.details.rating.rate}
                                    <i className="fa fa-star"></i>
                                </p>
                                <h3 className="display-6 fw-bold my-4">
                                    $ {this.props.details.price}
                                </h3>
                                <p className="lead">{this.props.details.description}</p>
                                <button className="btn btn-outline-dark px-4 py-2" onClick={this.addProductToCart}>
                                    Add to Cart
                                </button>
                                <NavLink to="/cart" className="btn btn-dark ms-2 px-3 py-2">
                                    Go to Cart
                                </NavLink>
                            </div>
                        </>}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    details: state.productDetails.details,
    loading: state.productDetails.loading
});

const mapDispatchToProps = {
    fetchProductDetails,
    addToCart
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
