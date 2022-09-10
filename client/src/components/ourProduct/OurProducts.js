import React from 'react'
import './OurProducts.css'
import img1 from '../../img/img-1.jpg'
import img2 from '../../img/img-2.jpg'
import img3 from '../../img/img-3.jpg'
import { Link } from 'react-router-dom'
import { Rating } from '@mui/material'

export default function OurProducts() {
  return (
    <div className='ourProducts'>
        <div className='container'> 
       <div className='ourProductsWrapper'>
              
            <div className='ourProductsTop'>    
                <div className='ourProductsTitleAndTag'> 
                    <span className='ourProductsTag'>Shopping Store</span>
                    <h2 className='ourProductsTitle'>Our Products</h2>                   
                </div>
                <button className='ourPorductsButton'>View all products</button>
            </div>
            <div className='ourProductsBottom'>
                    <div className='ourProductsCard'>
                        <div className='ourProductscardTop'>
                            <Link to='/details/product'>
                            <img src={img3} alt='' className='ourProductsCardImg'/>
                            </Link>
                            <span className='ourProductsCardTag'>New</span>
                        </div>
                        <div className='ourProductscardBottom'>
                        <Rating style={{marginTop:"10px"}} name="half-rating" defaultValue={2.5} precision={0.5} readOnly  />
                        <h4 className='ourProductsCardbottomTitle'>Single Safa</h4>
                        <span className='ourProductsCardbottomText'>Lorem ipsum has been</span>
                        <div className='ourProductsCardPriceAndButton'>
                                <span className='ourProductsCardPrice'>$120.00</span>
                                <button className='ourProductsCardAndButton'>Add to Cart</button>
                        </div>
                        </div>
                    </div>
                    <div className='ourProductsCard'>
                        <div className='ourProductscardTop'>
                            <Link to='/details/product'>
                            <img src={img2} alt='' className='ourProductsCardImg'/>
                          
                          </Link>  
                          <span className='ourProductsCardTag'>New</span>
                        </div>
                        <div className='ourProductscardBottom'>
                        <Rating style={{marginTop:"10px"}} name="half-rating" defaultValue={2.5} precision={0.5} readOnly  />
                        <h4 className='ourProductsCardbottomTitle'>Single Safa</h4>
                        <span className='ourProductsCardbottomText'>Lorem ipsum has been</span>
                        <div className='ourProductsCardPriceAndButton'>
                                <span className='ourProductsCardPrice'>$120.00</span>
                                <button className='ourProductsCardAndButton'>Add to Cart</button>
                        </div>
                        </div>
                    </div>
                    <div className='ourProductsCard'>
                        <div className='ourProductscardTop'>
                            <Link to='/details/product'>
                            <img src={img1} alt='' className='ourProductsCardImg'/>
                          
                          </Link>  
                          <span className='ourProductsCardTag'>New</span>
                        </div>
                        <div className='ourProductscardBottom'>
                        <Rating style={{marginTop:"10px"}} name="half-rating" defaultValue={2.5} precision={0.5} readOnly  />
                        <h4 className='ourProductsCardbottomTitle'>Single Safa</h4>
                        <span className='ourProductsCardbottomText'>Lorem ipsum has been</span>
                        <div className='ourProductsCardPriceAndButton'>
                                <span className='ourProductsCardPrice'>$120.00</span>
                                <button className='ourProductsCardAndButton'>Add to Cart</button>
                        </div>
                        </div>
                    </div>
                    <div className='ourProductsCard'>
                        <div className='ourProductscardTop'>
                            <Link to='/details/product'>
                            <img src={img3} alt='' className='ourProductsCardImg'/>
                          
                          </Link>  
                          <span className='ourProductsCardTag'>New</span>
                        </div>
                        <div className='ourProductscardBottom'>
                        <Rating style={{marginTop:"10px"}} name="half-rating" defaultValue={2.5} precision={0.5} readOnly  />
                        <h4 className='ourProductsCardbottomTitle'>Single Safa</h4>
                        <span className='ourProductsCardbottomText'>Lorem ipsum has been</span>
                        <div className='ourProductsCardPriceAndButton'>
                                <span className='ourProductsCardPrice'>$120.00</span>
                                <button className='ourProductsCardAndButton'>Add to Cart</button>
                        </div>
                        </div>
                    </div>
                    <div className='ourProductsCard'>
                        <div className='ourProductscardTop'>
                            <Link to='/details/product'>
                            <img src={img2} alt='' className='ourProductsCardImg'/>
                          
                          </Link>  
                          <span className='ourProductsCardTag'>New</span>
                        </div>
                        <div className='ourProductscardBottom'>
                        <Rating style={{marginTop:"10px"}} name="half-rating" defaultValue={2.5} precision={0.5} readOnly  />
                        <h4 className='ourProductsCardbottomTitle'>Single Safa</h4>
                        <span className='ourProductsCardbottomText'>Lorem ipsum has been</span>
                        <div className='ourProductsCardPriceAndButton'>
                                <span className='ourProductsCardPrice'>$120.00</span>
                                <button className='ourProductsCardAndButton'>Add to Cart</button>
                        </div>
                        </div>
                    </div>
                    <div className='ourProductsCard'>
                        <div className='ourProductscardTop'>
                            <Link to='/details/product'>
                            <img src={img3} alt='' className='ourProductsCardImg'/>
                          
                          </Link> 
                           <span className='ourProductsCardTag'>New</span>
                        </div>
                        <div className='ourProductscardBottom'>
                        <Rating style={{marginTop:"10px"}} name="half-rating" defaultValue={2.5} precision={0.5} readOnly  />
                        <h4 className='ourProductsCardbottomTitle'>Single Safa</h4>
                        <span className='ourProductsCardbottomText'>Lorem ipsum has been</span>
                        <div className='ourProductsCardPriceAndButton'>
                                <span className='ourProductsCardPrice'>$120.00</span>
                                <button className='ourProductsCardAndButton'>Add to Cart</button>
                        </div>
                        </div>
                    </div>
                    <div className='ourProductsCard'>
                        <div className='ourProductscardTop'>
                            <Link to='/details/product'>
                            <img src={img1} alt='' className='ourProductsCardImg'/>
                          
                          </Link>  
                          <span className='ourProductsCardTag'>New</span>
                        </div>
                        <div className='ourProductscardBottom'>
                        <Rating style={{marginTop:"10px"}} name="half-rating" defaultValue={2.5} precision={0.5} readOnly  />
                        <h4 className='ourProductsCardbottomTitle'>Single Safa</h4>
                        <span className='ourProductsCardbottomText'>Lorem ipsum has been</span>
                        <div className='ourProductsCardPriceAndButton'>
                                <span className='ourProductsCardPrice'>$120.00</span>
                                <button className='ourProductsCardAndButton'>Add to Cart</button>
                        </div>
                        </div>
                    </div>
                    <div className='ourProductsCard'>
                        <div className='ourProductscardTop'>
                            <Link to='/details/product'>
                            <img src={img2} alt='' className='ourProductsCardImg'/>
                          
                          </Link>  
                          <span className='ourProductsCardTag'>New</span>
                        </div>
                        <div className='ourProductscardBottom'>
                        <Rating style={{marginTop:"10px"}} name="half-rating" defaultValue={2.5} precision={0.5} readOnly  />
                        <h4 className='ourProductsCardbottomTitle'>Single Safa</h4>
                        <span className='ourProductsCardbottomText'>Lorem ipsum has been</span>
                        <div className='ourProductsCardPriceAndButton'>
                                <span className='ourProductsCardPrice'>$120.00</span>
                                <button className='ourProductsCardAndButton'>Add to Cart</button>
                        </div>
                        </div>
                    </div>
            </div>
        </div>
       </div>
    </div>
  )
}
