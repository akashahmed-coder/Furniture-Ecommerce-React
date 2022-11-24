import React from 'react'
import { Rating } from '@mui/material';
import RatingUserImg from '../../img/img-8.webp'

export default function Review() {
  return (
    <div className='BottomDescReview'>
            <div className='perReview'>
              <div className='perReviewTop'>
                 <div className='perRiviewUserAndTime'>
                    <div className='perReviewUserandRating'>
                    <img className='perReviewUserImg' alt='' src={RatingUserImg} />
                     <div className='perRiviewUsernameAndRating'>
                     <h4 className='perRiviewUsername'>Janae Randolph</h4>
                      <div style={{display:"flex",alignItem:"center"}}>
                      <Rating name="half-rating" defaultValue={4.5}  size="small" precision={0.5} readOnly />
                      <span className='userRatingtext'>4.5 Rating</span>
                      </div>
                     </div>
                    </div>
                    <span className='ratingTime'>2 hour ago</span>
                 </div>
              </div>
              <div className='perReviewBottom'>
                <p>
                Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
                </p>
              </div>
            </div>
            <div className='perReview'>
              <div className='perReviewTop'>
                 <div className='perRiviewUserAndTime'>
                    <div className='perReviewUserandRating'>
                    <img className='perReviewUserImg' alt='' src={RatingUserImg} />
                     <div className='perRiviewUsernameAndRating'>
                     <h4 className='perRiviewUsername'>Janae Randolph</h4>
                      <div style={{display:"flex",alignItem:"center"}}>
                      <Rating name="half-rating" defaultValue={4.5}  size="small" precision={0.5} readOnly />
                      <span className='userRatingtext'>4.5 Rating</span>
                      </div>
                     </div>
                    </div>
                    <span className='ratingTime'>2 hour ago</span>
                 </div>
              </div>
              <div className='perReviewBottom'>
                <p>
                Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
                </p>
              </div>
            </div>
            <div className='perReview'>
              <div className='perReviewTop'>
                 <div className='perRiviewUserAndTime'>
                    <div className='perReviewUserandRating'>
                    <img className='perReviewUserImg' alt='' src={RatingUserImg} />
                     <div className='perRiviewUsernameAndRating'>
                     <h4 className='perRiviewUsername'>Janae Randolph</h4>
                      <div style={{display:"flex",alignItem:"center"}}>
                      <Rating name="half-rating" defaultValue={4.5}  size="small" precision={0.5} readOnly />
                      <span className='userRatingtext'>4.5 Rating</span>
                      </div>
                     </div>
                    </div>
                    <span className='ratingTime'>2 hour ago</span>
                 </div>
              </div>
              <div className='perReviewBottom'>
                <p>
                Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
                </p>
              </div>
            </div>
            <div className='perReview'>
              <div className='perReviewTop'>
                 <div className='perRiviewUserAndTime'>
                    <div className='perReviewUserandRating'>
                    <img className='perReviewUserImg' alt='' src={RatingUserImg} />
                     <div className='perRiviewUsernameAndRating'>
                     <h4 className='perRiviewUsername'>Janae Randolph</h4>
                      <div style={{display:"flex",alignItem:"center"}}>
                      <Rating name="half-rating" defaultValue={4.5}  size="small" precision={0.5} readOnly />
                      <span className='userRatingtext'>4.5 Rating</span>
                      </div>
                     </div>
                    </div>
                    <span className='ratingTime'>2 hour ago</span>
                 </div>
              </div>
              <div className='perReviewBottom'>
                <p>
                Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
                </p>
              </div>
            </div>
          </div>
  )
}
