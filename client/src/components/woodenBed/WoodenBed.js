import React from 'react'
import img5 from '../../img/img-5.webp'

export default function WoodenBed() {
  return (
    <div className='woodenBed'>
        <div className='container'>
        <div className='woodenBedWrapper'>
           <div className='woodenBedLeft'>
              <span className='woodenBedText'>Shipping Store</span>
              <h2 className='woodenBedTitle'>Wooden Bed Starts From $550.00</h2>
              <button className='woodenBedButton'>Shop Now</button>
           </div>
           <div className='woodenBedRight'>
               <img className='woodenBedImg' src={img5} alt=''/>
           </div>
        </div>
        </div>
    </div>
  )
}
