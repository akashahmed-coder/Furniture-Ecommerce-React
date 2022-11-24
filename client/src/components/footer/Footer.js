import React from 'react'
import logo from '../../img/logo-1.webp'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <div className='footer'>
       <div className='container'>
       <div className='footerWrapper'>
        <div className='footerDiv'>
            <h3 className='footerDivTitle'>About Store</h3>
            <ul className='footerDivList'>
                <li className='footerDivListItem'>Home</li>
                <li className='footerDivListItem'>Shop</li>
                <li className='footerDivListItem'>Product</li>
                <li className='footerDivListItem'>About Us</li>
                <li className='footerDivListItem'>Festival Offer</li>
                <li className='footerDivListItem'>Contact Us</li>
                <li className='footerDivListItem'>LogIn</li>
            </ul>
        </div>
        <div className='footerDiv'>
            <h3 className='footerDivTitle'>Brands</h3>
            <ul className='footerDivList'>
                <li className='footerDivListItem'>Adsum</li>
                <li className='footerDivListItem'>Albam</li>
                <li className='footerDivListItem'>and Wander</li>
                <li className='footerDivListItem'>Lady White Co.</li>
                <li className='footerDivListItem'>Arpenteur</li>
                <li className='footerDivListItem'>EastLogue</li>
                <li className='footerDivListItem'>Gitman Vintage</li>
                
            </ul>
        </div>
        <div className='footerDiv'>
            <h3 className='footerDivTitle'>Categories</h3>
            <ul className='footerDivList'>
                <li className='footerDivListItem'>Single Safa</li>
                <li className='footerDivListItem'>Sleeper Safas</li>
                <li className='footerDivListItem'>Accebt Chairs</li>
                <li className='footerDivListItem'>Chairs-and-half</li>
                <li className='footerDivListItem'>Recliners</li>
                <li className='footerDivListItem'>Swivels and Gliders</li>
                <li className='footerDivListItem'>Laveseats</li>
            </ul>
        </div>
        <div className='footerDiv'>
            <h3 className='footerDivTitle'>Support</h3>
            <ul className='footerDivList'>
                <li className='footerDivListItem'>GDPR</li>
                <li className='footerDivListItem'>Cookie Policy</li>
                <li className='footerDivListItem'>Terms</li>
                <li className='footerDivListItem'>Abuse Policy</li>
                <li className='footerDivListItem'>Privacy Policy</li>
                <li className='footerDivListItem'>Swivels and Gliders</li>
                <li className='footerDivListItem'>Contact Us</li>
            </ul>
        </div>
       </div>
       </div>
            <div className='footerSocial'>
            <div className='container'>
                    <div className='footerSocialWrapper'>
                        <img className='footerSocialLogo' src={logo} alt=""/>
                        <div className='footerSocialIcons'>
                          <Link to="/"  className="fa fa-facebook"></Link>
                          <Link to="/"  className="fa fa-twitter"></Link>
                          <Link to="/"  className="fa fa-linkedin"></Link>
                        </div>
                    </div>
                    
                </div>
            </div>
    </div>
  )
}
