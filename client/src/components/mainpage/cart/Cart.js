import React, { useState } from 'react'
import Footer from '../../footer/Footer'
import { CartOrderSummery } from './CartOrderSummery'
import CartCustomerInformation from './CartCustomerInformation'
import { useParams } from 'react-router-dom'
import Header from '../header/Header'

export default function Cart() {
    const params = useParams()
  return (
    <div className='cart'>
        <Header p={`Save This Weekend`} H={`Cart`} />
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
