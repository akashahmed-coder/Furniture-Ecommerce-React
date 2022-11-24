import React from 'react'
import Rating from '../../rating/Rating'
import Footer from '../../footer/Footer'
import OurAllProduct from '../../OurAllProduct/OurAllProduct'
import ShopSideBar from '../../shopSideBar/ShopSideBar'
import Header from '../header/Header'

export default function Shop() {
  return (
    <>
       <Header p="Save This Weekend" H="Shop"/>
        <div className='shopProducts'>
        <div className='container'>
            <div className='shopProductsWrapper'>
            <div className='shopProductsLeft'>
                <ShopSideBar/>
            </div>
            <div className='shopProductsRight'>
            <OurAllProduct/>
            </div>
            </div>
        </div>
        </div>
        
        <Rating/>
      <Footer/>
    </>
  )
}
