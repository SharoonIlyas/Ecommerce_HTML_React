import React, { Component } from 'react'

export default class shopContainer extends Component {
    render() {
        return (
            <div>
                <div className="section">

                    <div className="container">

                        <div className="row">

                            <div className="col-md-4 col-xs-6">
                                <div className="shop">
                                    <div className="shop-img">
                                        <img src="./assets/img/shop01.png" alt="" />
                                    </div>
                                    <div className="shop-body">
                                        <h3>This html template was converted to React Components<br />For Demonstration Pusposes</h3>
                                        <a href="#" className="cta-btn">Shop now <i className="fa fa-arrow-circle-right" /></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-xs-6">
                                <div className="shop">
                                    <div className="shop-img">
                                        <img src="./assets/img/shop03.png" alt="" />
                                    </div>
                                    <div className="shop-body">
                                        <h3>Accessories<br />Collection</h3>
                                        <a href="#" className="cta-btn">Shop now <i className="fa fa-arrow-circle-right" /></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-xs-6">
                                <div className="shop">
                                    <div className="shop-img">
                                        <img src="./assets/img/shop02.png" alt="" />
                                    </div>
                                    <div className="shop-body">
                                        <h3>Cameras<br />Collection</h3>
                                        <a href="#" className="cta-btn">Shop now <i className="fa fa-arrow-circle-right" /></a>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>

        )
    }
}
