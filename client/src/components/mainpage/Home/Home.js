import React from 'react'
import Navber from '../navber/Navber'
import TrendingFurniture from '../../trendingFurniture/TrendingFurniture'
import OurProducts from '../../ourProduct/OurProducts'
import WoodenBed from '../../woodenBed/WoodenBed'
import SpecialOffer from '../../specialoffer/SpecialOffer'
import Rating from '../../rating/Rating'
import Footer from '../../footer/Footer'
import SectionOne from '../../SectionOne/SectionOne'

export default function Home() {
 
  return (
    <div>
        <div className='homeHeader'> 
        <Navber/>
        <div className='container'>
            <div className='header-text'>
            <p>Save This Weekend</p>
            <h1>awesome design best furniture for your interior</h1>
            <button>Explore More</button>
            </div>
            
        </div>
        </div>
        
       <SectionOne/>
       <TrendingFurniture/>
       <OurProducts/>
       <WoodenBed/>
       <SpecialOffer/>
       <Rating/>
       <Footer/>
    </div>
  )
}
