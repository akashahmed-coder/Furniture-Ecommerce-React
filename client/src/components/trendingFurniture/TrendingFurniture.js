import React from 'react'
import ReactSlider from '../reactSlider/ReactSlider';

export default function TrendingFurniture() {
  return (
   <div className='container'>
     <div className='trendingFurniture'>
       <div className='tredingWrapper'>
        <div className='trendingLeft'>
                <span className='trendingTag'>Shopping Store</span>
                <h2 className='trendingTitle'>Buy trending furniture products.</h2>
                <span className='trendingText'>
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
                </span>
            </div>
            <div className='trendingRight'>
                <ReactSlider/>
            </div>

       </div>

    </div>
   </div>
  )
}




