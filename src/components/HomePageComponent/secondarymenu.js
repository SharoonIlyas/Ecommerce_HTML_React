import React, { Component } from 'react'

export default class secondarymenu extends Component {
    render() {
        return (
            <div>
                 <div className="section">
                    {/* container */}
                    <div className="container">
                        {/* row */}
                        <div className="row">
                            {/* section title */}
                            <div className="col-md-12">
                                <div className="section-title">
                                    <h3 className="title">New Products</h3>
                                    <div className="section-nav">
                                        <ul className="section-tab-nav tab-nav">
                                            <li className="active"><a data-toggle="tab" href="#tab1">Laptops</a></li>
                                            <li><a data-toggle="tab" href="#tab1">Smartphones</a></li>
                                            <li><a data-toggle="tab" href="#tab1">Cameras</a></li>
                                            <li><a data-toggle="tab" href="#tab1">Accessories</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* /section title */}
                            {/* Products tab & slick */}
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="products-tabs ">
                                        {/* tab */}
                                        <div id="tab1" className="tab-pane active col-md-4">
                                            <div className="products-slick" data-nav="#slick-nav-1">


                                            </div>
                                            <div id="slick-nav-1" className="products-slick-nav" />
                                        </div>
                                        {/* /tab */}
                                    </div>
                                </div>
                            </div>
                            {/* Products tab & slick */}
                        </div>
                        {/* /row */}
                    </div>
                    {/* /container */}
                </div>
            </div>
        )
    }
}
