import React from 'react'
import './cart.css'
import { Link } from 'react-router-dom'
import CartOrderSummeryProduct from './CartOrderSummeryProduct'

export const CartOrderSummery = () => {
  return (
    <div>
                <div className='cartTilteAndTotal'>
                    <h3 className='cartTitle'>Shopping Cart</h3>
                    <span className='cartTotal'>Total: $2,311</span>
                </div>
                  <CartOrderSummeryProduct/>
                   <Link to="/cart/customerInfo" className='continueShoppingButton'>Continue Shopping</Link>
    </div>
  )
}
