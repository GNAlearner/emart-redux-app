import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
                    <div className="container">
                        <NavLink className="navbar-brand fw-bold fs-4" to="/">
                            LA COLLECTION
                        </NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link active" to="/">
                                        Home
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/products">
                                        Products
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/about">
                                        About
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/contact">
                                        Contact
                                    </NavLink>
                                </li>
                            </ul>
                            <div className="buttons">
                                <NavLink to="/login" className="btn btn-outline-dark">
                                    <i className="fa fa-sign-in me-1"></i> Login</NavLink>
                                <NavLink to="/register" className="btn btn-outline-dark ms-2">
                                    <i className="fa fa-user-plus me-1"></i> Register</NavLink>
                                <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                                    <i className="fa fa-shopping-cart me-1"></i> Cart ({this.props.itemsInCart})</NavLink>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    itemsInCart: state.handleCart.length
});

export default connect(mapStateToProps,null)(Navbar);
