import React from 'react'
import SectionOne from '../../SectionOne/SectionOne'
import WoodenBed from '../../woodenBed/WoodenBed'
import SpecialOffer from '../../specialoffer/SpecialOffer'
import Rating from '../../rating/Rating'
import Footer from '../../footer/Footer'
import ServiceAbout from '../../serviceAbout/ServiceAbout'
import OurServices from '../../ourServices/OurServices'
import Header from '../header/Header'

export default function About() {
  return (
    <div>
      
        <Header p="Save This Weekend" H="About Us"/>
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
