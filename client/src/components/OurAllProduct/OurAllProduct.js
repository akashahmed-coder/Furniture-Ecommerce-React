import React from 'react'
import img1 from '../../img/img-1.jpg'
import img2 from '../../img/img-2.jpg'
import img3 from '../../img/img-3.jpg'
import img4 from '../../img/img-4.png'
import img5 from '../../img/img-5.jpg'
import img6 from '../../img/img-6.jpeg'
import img7 from '../../img/img-7.jpg'
import img8 from '../../img/img-13.jpg'
import img9 from '../../img/img-9.1.jpg'
import img10 from '../../img/img-9.jpg'
import img11 from '../../img/img-14.jpg'
import img12 from '../../img/img-15.jpg'
import {Pagination, Select , MenuItem , FormControl , InputLabel} from '@mui/material'
import './ourAllProduct.css'
import { Link } from 'react-router-dom'


export default function OurAllProduct() {
  return (
    <>
       


    <div className='OurAllProduct'>
      
      <div className='ourAllProductsWrapper'>         
              <div className='ourProductsTop'>    
                  <div className='ourAllProductsTitleAndTag'> 
                      <span className='ourProductsTag'>Shopping Store</span>
                      <h2 className='ourProductsTitle'>Find Your Products</h2>                   
                  </div>
                  <div style={{width:"300px"}}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Filter</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={10}
                        label="Age"
                      >
                        <MenuItem value={10}>Trending</MenuItem>
                        <MenuItem value={20}>Best Sale</MenuItem>
                        <MenuItem value={30}>Low Price</MenuItem>
                      </Select>
                </FormControl>
                  </div>
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
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star"></span>
                              <span class="fa fa-star"></span>
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
                              <span className='TagActive'>Sale</span>
                          </div>
                          <div className='ourProductscardBottom'>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star"></span>
                              <span class="fa fa-star"></span>
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
                              <span className='TagActive'>Sale</span>
                          </div>
                          <div className='ourProductscardBottom'>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star"></span>
                              <span class="fa fa-star"></span>
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
                              <img src={img4} alt='' className='ourProductsCardImg'/>
                              </Link>
                              <span className='ourProductsCardTag'>New</span>
                          </div>
                          <div className='ourProductscardBottom'>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star"></span>
                              <span class="fa fa-star"></span>
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
                              <img src={img5} alt='' className='ourProductsCardImg'/>
                              </Link>
                              <span className='TagActive'>Sale</span>
                          </div>
                          <div className='ourProductscardBottom'>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star"></span>
                              <span class="fa fa-star"></span>
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
                              <img src={img6} alt='' className='ourProductsCardImg'/>
                              </Link>
                              <span className='ourProductsCardTag'>New</span>
                          </div>
                          <div className='ourProductscardBottom'>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star"></span>
                              <span class="fa fa-star"></span>
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
                              <img src={img7} alt='' className='ourProductsCardImg'/>
                              </Link>
                              <span className='TagActive'>Sale</span>
                          </div>
                          <div className='ourProductscardBottom'>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star"></span>
                              <span class="fa fa-star"></span>
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
                              <img src={img8} alt='' className='ourProductsCardImg'/>
                              </Link>
                              <span className='TagActive'>Sale</span>
                          </div>
                          <div className='ourProductscardBottom'>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star"></span>
                              <span class="fa fa-star"></span>
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
                              <img src={img9} alt='' className='ourProductsCardImg'/>
                              </Link>
                              <span className='ourProductsCardTag'>New</span>
                          </div>
                          <div className='ourProductscardBottom'>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star"></span>
                              <span class="fa fa-star"></span>
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
                              <img src={img10} alt='' className='ourProductsCardImg'/>
                              </Link>
                              <span className='TagActive'>Sale</span>
                          </div>
                          <div className='ourProductscardBottom'>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star"></span>
                              <span class="fa fa-star"></span>
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
                              <img src={img11} alt='' className='ourProductsCardImg'/>
                              </Link>
                              <span className='ourProductsCardTag'>New</span>
                          </div>
                          <div className='ourProductscardBottom'>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star"></span>
                              <span class="fa fa-star"></span>
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
                              <img src={img12} alt='' className='ourProductsCardImg'/>
                         </Link>
                              <span className='TagActive'>Sale</span>
                          </div>
                          <div className='ourProductscardBottom'>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star checked"></span>
                              <span class="fa fa-star"></span>
                              <span class="fa fa-star"></span>
                          <h4 className='ourProductsCardbottomTitle'>Single Safa</h4>
                          <span className='ourProductsCardbottomText'>Lorem ipsum has been</span>
                          <div className='ourProductsCardPriceAndButton'>
                                  <span className='ourProductsCardPrice'>$120.00</span>
                                  <button className='ourProductsCardAndButton'>Add to Cart</button>
                          </div>
                          </div>
                      </div>
              </div>
        <div className='ourProductspagination'>
          <Pagination count={10} color="primary" size='large'  />
          </div>
          </div>

        </div>

      </>
  )
}