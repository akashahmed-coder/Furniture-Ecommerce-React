import React from 'react'
import './detailsProduct.css'
import detailImg from '../../../img/img-16.jpg'
export default function DetailsProduct() {
  return (
    <div className='detailsProduct'>
       <div className='container'>
           <div className='detailsProductWrapper'>
             <img className='detailsProductImg' src={detailImg}/>
             <div className='detailsProductDetails'>
                <h2 className='detailsProductTitle'>
                    Wooden Bed - Solimo Cleo Metal King Bed Black
                </h2>
                <div className='detailsStar'>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span className='starinText'>4.5 rating</span>
                </div>
                <h3 className='detailsProductPrice'>$113.00</h3>
                <p className='detailsProductDescription'>
                Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model
                </p>
               <div className='detailsProductQuantityandSize'>
                
               </div>
             </div>
           </div>
       </div>
    </div>
  )
}
