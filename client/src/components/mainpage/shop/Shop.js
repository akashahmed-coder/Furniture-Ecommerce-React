import React from 'react'
import "./shop.css"
import Navber from '../navber/Navber'
import Rating from '../../rating/Rating'
import Footer from '../../footer/Footer'
import OurAllProduct from '../../OurAllProduct/OurAllProduct'
import ShopSideBar from '../../shopSideBar/ShopSideBar'

export default function Shop() {
  return (
    <>
       <div className='OurAllProductHeader'> 
        <Navber/>
        <div className='container'>
            <div className='ourAllPrductText'>
            <p>Save This Weekend</p>
            <h1>Our Products</h1>
            </div>
            
        </div>
        </div>
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
