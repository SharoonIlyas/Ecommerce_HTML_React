import React, { Component } from 'react'
import SecondaryMenuList from '../components/HomePageComponent/secondarymenu'
import HotDealSection from '../components/HomePageComponent/hotdealsection'
import MultiproductList from '../components/HomePageComponent/multiproductlist'

import Subscribe from '../components/HomePageComponent/subscribe'
import SingleProduct from '../components/HomePageComponent/singleproduct'
import ShopContainer from '../components/HomePageComponent/shopContainer'

export default class Home extends Component {
    render() {
        return (
            <div>


               
                
                <ShopContainer></ShopContainer>
                
                <SecondaryMenuList></SecondaryMenuList>
                
                
                
                
                <Subscribe></Subscribe>
                <HotDealSection></HotDealSection>

                <MultiproductList></MultiproductList>
             
               


            </div>

        )
    }
}
