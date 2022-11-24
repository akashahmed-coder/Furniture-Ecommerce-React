import React from 'react'
import { Rating } from '@mui/material';

export default function SubmiteReview() {
  return (
    <div className='submitReview'>
    <h2 className='submitReviewTitle'>Rate Product</h2>
    <Rating name="half-rating" defaultValue={1}  size="large" precision={0.5}/>
    <p className='writeReviewSpan'>Write a review</p>
    <div className='submitReviewNameAndEmail'>
      <input type='text' placeholder='Full Name' className='submitReviwInput'/>
      <input type='text' placeholder='Email'className='submitReviwInput'/>
    </div>
    <textarea rows="7" cols="100" placeholder="Message" className='reviewTextArea'/>
    <button className='submitReviewButton'>Send Message</button>
  </div>
  )
}
