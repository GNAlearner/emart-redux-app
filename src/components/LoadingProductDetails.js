import React, { Component } from 'react'
import Skeleton from 'react-loading-skeleton'

export default class LoadingProductDetails extends Component {
    render() {
        return (
            <>
                <div className="col-md-6">
                    <Skeleton height={400}/>
                </div>
                <div className="col-md-6" style={{lineHeight:2}}>
                    <Skeleton height={50} width={300}/>
                    <Skeleton height={75}/>
                    <Skeleton height={25} width={150}/>
                    <Skeleton height={50}/>
                    <Skeleton height={150}/>
                    <div className="d-flex">
                        <Skeleton height={50} width={100}/>
                        <Skeleton height={50} width={100} style={{marginLeft:6}}/>
                    </div>
                </div>
            </>
        )
    }
}
