import React, { Component } from 'react'
import Products from './Products'

export default class Home extends Component {
    render() {
        return (
            <>
                <div>
                    <div className="card bg-dark text-white border-0">
                        <img src="/assests/bg.jpg" className="card-img" alt="Banner" height="550px" />
                        <div className="card-img-overlay d-flex flex-column justify-content-center">
                            <div className="container">
                                <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON</h5>
                                <h5 className="card-title display-3 fw-bolder mb-0">ARRIVALS</h5>
                                <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Products />
            </>
        )
    }
}
