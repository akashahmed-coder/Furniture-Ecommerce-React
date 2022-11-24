import React from 'react'
import { Rating } from '@mui/material';

export default function SideRatingCount() {
  return (
    <div className='sideRatingCount'>
        <div className='sideRatingCountTop'>
           <h2 className='sideRatingCountTotal'>4.4</h2>
           <Rating name="half-rating" defaultValue={4.4}  size="large" precision={0.1} readOnly/>
           <p className='overAllReview'>(Overall 510 Review)</p>
        </div>
        <div className='sideRatingCountBottom'>
          <div className='sideRatingCountBottomPerStar'>
            <p>5 Star</p>
            <Rating name="half-rating" defaultValue={5} style={{margin:"0px 10px"}}   size="medium"readOnly/>
            <p>(200)</p>
          </div>
          <div className='sideRatingCountBottomPerStar'>
            <p>4 Star</p>
            <Rating name="half-rating" defaultValue={4} style={{margin:"0px 10px"}}   size="medium"readOnly/>
            <p>(121)</p>
          </div>
          <div className='sideRatingCountBottomPerStar'>
            <p>3 Star</p>
            <Rating name="half-rating" defaultValue={3} style={{margin:"0px 10px"}} size="medium"readOnly/>
            <p>(50)</p>
          </div>
          <div className='sideRatingCountBottomPerStar'>
            <p>2 Star</p>
            <Rating name="half-rating" defaultValue={2} style={{margin:"0px 10px"}}  size="medium"readOnly/>
            <p>(10)</p>
          </div>
          <div className='sideRatingCountBottomPerStar'>
            <p>1 Star</p>
            <Rating name="half-rating" defaultValue={1} style={{margin:"0px 10px"}}  size="medium"readOnly/>
            <p>(8)</p>
          </div>
        </div>
        <button className='writeAreview'>Write a review</button>
    </div>
  )
}
