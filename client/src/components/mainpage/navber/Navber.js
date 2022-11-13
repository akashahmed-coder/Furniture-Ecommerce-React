import React from 'react'
import { Link } from 'react-router-dom'
import Logo1 from '../../../img/logo-1.webp'
import Cart from '../../../img/cart.svg.png'

export default function Navber() {
  return (
    
        <div className='container'>
          <div className='navbar'>
          <div className='logo'>
           <img src={Logo1} alt='header'/>
           </div>
           <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li>
                      <div className="cart-icon">
                      <span>3</span>
                      <Link to="/cart">
                      <img src={Cart} alt='' width='30' />
                      </Link>
                    </div>
                </li>
              </ul>
          </div>
        </div>
   
  )
}
