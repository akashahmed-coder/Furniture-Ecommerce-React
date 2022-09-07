import React from 'react'
import './about.css'
import Navber from '../navber/Navber'
import SectionOne from '../../SectionOne/SectionOne'
import WoodenBed from '../../woodenBed/WoodenBed'
import SpecialOffer from '../../specialoffer/SpecialOffer'
import Rating from '../../rating/Rating'
import Footer from '../../footer/Footer'
import ServiceAbout from '../../serviceAbout/ServiceAbout'
import OurServices from '../../ourServices/OurServices'

export default function About() {
  return (
    <div>
      
        <div className='aboutHeader'> 
        <Navber/>
        <div className='container'>
            <div className='aboutText'>
            <p>Save This Weekend</p>
            <h1>About Us</h1>
            </div>
            
        </div>
        </div>
        <SectionOne about/>
        <ServiceAbout/>
        <OurServices/>
        <WoodenBed/>
        <SpecialOffer/>
        <Rating/>
        <Footer/> 
      
    </div>
  )
}
