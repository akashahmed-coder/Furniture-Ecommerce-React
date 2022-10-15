import React from 'react'
import './cart.css'
import Rating from '@mui/material/Rating'
import { Close } from '@mui/icons-material'
import cartProductImg1 from '../../../img/img-7.webp'
import cartProductImg2 from '../../../img/img-9.1.webp'
import cartProductImg3 from '../../../img/img-9.webp'
import Footer from '../../footer/Footer'

export default function Cart() {
  return (
    <div className='cart'>
        <div className='container'>
            <div className='cartWrapper'>
                <div className='cartLeft'>
                <div className='cartTilteAndTotal'>
                    <h3 className='cartTitle'>Shopping Cart</h3>
                    <span className='cartTotal'>Total: $2,311</span>
                </div>
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
                        <button className='CartIncreaseButton'>+</button>
                        <span className='CartCounter'>1</span>
                        <button className='CartIncreaseButton'>-</button>
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
                        <button className='CartIncreaseButton'>+</button>
                        <span className='CartCounter'>1</span>
                        <button className='CartIncreaseButton'>-</button>
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
                        <button className='CartIncreaseButton'>+</button>
                        <span className='CartCounter'>1</span>
                        <button className='CartIncreaseButton'>-</button>
                        </div>
                    </div>
                    <div className='cartPriceAndStatus'>
                        <Close size="large" htmlColor='#666' className='deleteCartproductIcon'/>
                        <p className='cartProductPrice'>$120.00</p>
                        <span className='cartProductStatus'>Ship on Friday, 30 October</span>
                    </div>
                   </div>

                   <button className='continueShoppingButton'>Continue Shopping</button>
                </div> 
                <div className='cartRight'>
                  <div className='orderSummery'>
                    <h2 className='oerderSummeryTitle'>Order Summary</h2>
                    <div className='orderSummeryKeyValue'>
                        <p className='orderSummeryKey'>Total Item</p>
                        <p className='orderSummeryValue'>3</p>
                    </div>
                    <div className='orderSummeryKeyValue'>
                        <p className='orderSummeryKey'>Cart Total</p>
                        <p className='orderSummeryValue'>$550.00</p>
                    </div>
                    <div className='orderSummeryKeyValue'>
                        <p className='orderSummeryKey'>Product Discount</p>
                        <p className='orderSummeryValue'>$110.00</p>
                    </div>
                    <div className='orderSummeryKeyValue'>
                        <p className='orderSummeryKey'>Shipping</p>
                        <p className='orderSummeryValue'>$20.00</p>
                    </div>
                    <div className='orderSummeryKeyValue'>
                        <p className='orderSummeryKey'>Cupon Descount</p>
                        <p className='orderSummeryValue'>0</p>
                    </div>
                    <div className='CartRightFreeDelivery'>
                        <span className='freeDeliveryButton'>Free Delivery</span>
                        <span className='freeDeliveryText'>For Order Above $900.00</span>
                    </div>
                    <div className='orderSummeryKeyValue'>
                        <h4 className='oderSummeryTotalKey'>Total</h4>
                        <p className='oderSummeryTotalValue'>$680.00</p>
                    </div>
                    <button className='placeOrderButton'>Place Order</button>
                  </div>

                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
