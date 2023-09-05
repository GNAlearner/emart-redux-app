import React, { Component } from 'react'
import Skeleton from 'react-loading-skeleton'

export default class LoadingProductList extends Component {
  render() {
    return (
      <>
        <div className="col-md-3">
            <Skeleton height={350}/>
        </div>
        <div className="col-md-3">
            <Skeleton height={350}/>
        </div>
        <div className="col-md-3">
            <Skeleton height={350}/>
        </div>
        <div className="col-md-3">
            <Skeleton height={350}/>
        </div>
      </>
    )
  }
}
