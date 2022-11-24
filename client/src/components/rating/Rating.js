import React from 'react'
import img8 from '../../img/img-8.webp'
import  Ratings  from '@mui/material/Rating'
export default function Rating() {
  return (
    <div className='rating'>
        <div className='ratingDiv'>
            <span className='ratingDivComment'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

            </span>
            <div className='ratingDivBottom'>
                
                <div className='ratingImgAndUser'>
                <img src={img8} className='ratingDivImg' />
                    <div className='ratingUserNameAndRating'>
                    <h4 className='RatingUserName'>
                        Janae Randolph
                    </h4>
                    <div className='ratingDivRate'>
                    <Ratings style={{margin:"10px 0px"}}  name="half-rating" defaultValue={3.5} size="large" precision={0.5} readOnly />
                    </div>
                    </div>
                    
                </div>
                <span className='ratingComma'>,,</span>
            </div>
        </div>

    </div>
  )
}
