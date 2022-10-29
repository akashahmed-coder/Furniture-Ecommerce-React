import React, { useState } from 'react'
import './cart.css'
import Footer from '../../footer/Footer'
import Navber from '../navber/Navber'
import { CartOrderSummery } from './CartOrderSummery'
import CartCustomerInformation from './CartCustomerInformation'
import { useParams } from 'react-router-dom'

export default function Cart() {
    const params = useParams()
  return (
    <div className='cart'>
        <div className='cartHeader'> 
            <Navber/>
            <div className='container'>
                <div className='cartText'>
                    <p>Save This Weekend</p>
                    <h1>Cart</h1>
                </div> 
            </div>
        </div>
        <div className='container'>
            <div className='cartWrapper'>
                <div className='cartLeft'>
                  {
                    params.id !== "customerInfo"?
                    <CartOrderSummery/>:<CartCustomerInformation/>
                  }
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
