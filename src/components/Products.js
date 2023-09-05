import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchProducts } from '../state/actions/actions';
import LoadingProductList from './LoadingProductList';
import ShowProducts from './ShowProducts';

class Products extends Component {
    constructor() {
        super();
        this.state = {
            filteredProducts: []
        }
    }

    setAllProducts = () => {
        this.setState({ filteredProducts: this.props.products })
    }

    filterProduct = (cat) => {
        const updatedList = this.props.products.filter((x)=> x.category === cat);
        this.setState({
            filteredProducts: updatedList
        })
    }

    componentDidMount() {
        this.props.fetchProducts();
    }

    render() {
        console.log(this.props.products)
        return (
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {this.props.loading ? <LoadingProductList /> :
                        <>
                            <div className="buttons d-flex justify-content-center mb-5 pb-5">
                                <button className="btn btn-outline-dark me-2" onClick={this.setAllProducts}>All</button>
                                <button className="btn btn-outline-dark me-2" onClick={()=> this.filterProduct("men's clothing")}>Men's Clothing</button>
                                <button className="btn btn-outline-dark me-2" onClick={()=> this.filterProduct("women's clothing")}>Women's Clothing</button>
                                <button className="btn btn-outline-dark me-2" onClick={()=> this.filterProduct("jewelery")}>Jewelery</button>
                                <button className="btn btn-outline-dark" onClick={()=> this.filterProduct("electronics")}>Electronics</button>
                            </div>
                            {this.state.filteredProducts.length ? <ShowProducts products={this.state.filteredProducts}/> :
                            <ShowProducts products={this.props.products}/>
                            }
                        </>}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    products: state.productsList.products,
    loading: state.productsList.loading
});

export default connect(mapStateToProps, { fetchProducts })(Products);