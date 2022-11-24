import React, { useState } from 'react'
import Description from '../description/Description';
import Satisfications from '../satisfications/Satisfications';
import Review from '../review/Review';
import SubmiteReview from '../submiteReview/SubmiteReview';

export default function BottomDescriptionProduct() {
 const [bottomDIv,SetBottomDiv] = useState("description")
 
  return (
    <div className='bottomDescriptionProduct'>
      <div className='ButtomDescButtons'>
         <button className='ButtomDescButton' onClick={()=>SetBottomDiv("description")}>Description</button>
         <button className='ButtomDescButton ' onClick={()=>SetBottomDiv("specifications")}>Specifications</button>
         <button className='ButtomDescButton'onClick={()=>SetBottomDiv("review")}>Review</button>     
      </div>
      <div className='BottomDescDetails'>
      {
          bottomDIv === "description"?<Description/> :null
        }
        {
          bottomDIv === "specifications"?<Satisfications/> :null
        }
        {
          bottomDIv === "review"?<Review/> :null
        }
      </div>
      <SubmiteReview/>
    </div>
  )
}
