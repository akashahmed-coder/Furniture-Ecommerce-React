import React from 'react'
import Rating from '@mui/material/Rating'
import { Close } from '@mui/icons-material'
import cartProductImg1 from '../../../img/img-7.webp'
import cartProductImg2 from '../../../img/img-9.1.webp'
import cartProductImg3 from '../../../img/img-9.webp'

function CartOrderSummeryProduct() {
  return (
    <div>
         <div className='cartRightProduct'>
                    <img src={cartProductImg1} alt='' className='cartProductImg'/>
                    <div className='cartProductDetails'>
                        <div className='cartProductNameAndRating'>
                            <h4 className='cartProductName'>Single Sofa</h4>
                            <Rating defaultValue={4.5} precision={0.1} size="small" readOnly/>
                        </div>
                        <p className='cartProductDescription'>
                        Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator
                        </p>
                        <div className='quantityButtonAndCounter'>
                        <button className='CartIncreaseButton'>-</button>
                        <span className='CartCounter'>1</span>
                        <button className='CartIncreaseButton'>+</button>
                        </div>
                    </div>
                    <div className='cartPriceAndStatus'>
                        <Close size="large" htmlColor='#666' className='deleteCartproductIcon'/>
                        <p className='cartProductPrice'>$120.00</p>
                        <span className='cartProductStatus'>Ship on Friday, 30 October</span>
                    </div>
                   </div>
                   <div className='cartRightProduct'>
                    <img src={cartProductImg2} alt='' className='cartProductImg'/>
                    <div className='cartProductDetails'>
                        <div className='cartProductNameAndRating'>
                            <h4 className='cartProductName'>Single Sofa</h4>
                            <Rating defaultValue={4.5} precision={0.1} size="small" readOnly/>
                        </div>
                        <p className='cartProductDescription'>
                        Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator
                        </p>
                        <div className='quantityButtonAndCounter'>
                        <button className='CartIncreaseButton'>-</button>
                        <span className='CartCounter'>1</span>
                        <button className='CartIncreaseButton'>+</button>
                        </div>
                    </div>
                    <div className='cartPriceAndStatus'>
                        <Close size="large" htmlColor='#666' className='deleteCartproductIcon'/>
                        <p className='cartProductPrice'>$120.00</p>
                        <span className='cartProductStatus'>Ship on Friday, 30 October</span>
                    </div>
                   </div>
                   <div className='cartRightProduct'>
                    <img src={cartProductImg3} alt='' className='cartProductImg'/>
                    <div className='cartProductDetails'>
                        <div className='cartProductNameAndRating'>
                            <h4 className='cartProductName'>Single Sofa</h4>
                            <Rating defaultValue={4.5} precision={0.1} size="small" readOnly/>
                        </div>
                        <p className='cartProductDescription'>
                        Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator
                        </p>
                        <div className='quantityButtonAndCounter'>
                        <button className='CartIncreaseButton'>-</button>
                        <span className='CartCounter'>1</span>
                        <button className='CartIncreaseButton'>+</button>
                        </div>
                    </div>
                    <div className='cartPriceAndStatus'>
                        <Close size="large" htmlColor='#666' className='deleteCartproductIcon'/>
                        <p className='cartProductPrice'>$120.00</p>
                        <span className='cartProductStatus'>Ship on Friday, 30 October</span>
                    </div>
                   </div>

    </div>
  )
}

export default CartOrderSummeryProduct