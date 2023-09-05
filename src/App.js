import React from "react"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Products from "./components/Products"
import ProductDetails from "./components/ProductDetailWrap"
import Cart from "./components/Cart"

export default class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/products" element={<Products />}/>
            <Route exact path="/product/:id" element={<ProductDetails />}/>
            <Route exact path="/cart" element={<Cart />}/>
          </Routes>
        </BrowserRouter>
      </>
    )
  }
}