import React from 'react'
import img1 from '../../img/img-26.webp'
import img2 from '../../img/img-35.webp'
import img3 from '../../img/img-34.webp'
import img4 from '../../img/img-33.webp'
import img5 from '../../img/img-32.webp'
import img6 from '../../img/img-31.webp'
import img7 from '../../img/img-30.webp'
import img8 from '../../img/img-27.webp'
import {Pagination} from '@mui/material'
import { Link } from 'react-router-dom'


export default function OurAllProduct() {
  return (
    <>
       


    <div className='OurAllProduct'>
      
      <div className='ourAllProductsWrapper'>         
              <div className='ourProductsTop'>    
                  <div className='ourAllProductsTitleAndTag'> 
                      <span className='ourProductsTag'>Blog</span>
                      <h2 className='ourProductsTitle'>Feature Post</h2>                   
                  </div>
                  <div>
                     <Link to="/blog">View All Blog</Link>
                  </div>
              </div>
              <div className='BlogBottom'>
                 <div className='blogCard'>
                    <div className='blogCardTop'>
                        <img src={img1} alt="" className='blogCardImg' />
                    </div>
                    <div className='blogCardBottom'>
                        <h4 className='blogCardTitle'>What is Lorem Ipsum</h4>
                        <p className='blogCardDescription'>
                            Lorem ipsum has been the indus's standard dummy text ever
                        </p>
                        <Link to="/blog" className='blogCardButton'>.Read More</Link>
                    </div>
                 </div>
                 <div className='blogCard'>
                    <div className='blogCardTop'>
                        <img src={img2} alt="" className='blogCardImg' />
                    </div>
                    <div className='blogCardBottom'>
                        <h4 className='blogCardTitle'>What is Lorem Ipsum</h4>
                        <p className='blogCardDescription'>
                            Lorem ipsum has been the indus's standard dummy text ever
                        </p>
                        <Link to="/blog" className='blogCardButton'>.Read More</Link>
                    </div>
                 </div>
                 <div className='blogCard'>
                    <div className='blogCardTop'>
                        <img src={img3} alt="" className='blogCardImg' />
                    </div>
                    <div className='blogCardBottom'>
                        <h4 className='blogCardTitle'>What is Lorem Ipsum</h4>
                        <p className='blogCardDescription'>
                            Lorem ipsum has been the indus's standard dummy text ever
                        </p>
                        <Link to="/blog" className='blogCardButton'>.Read More</Link>
                    </div>
                 </div>
                 <div className='blogCard'>
                    <div className='blogCardTop'>
                        <img src={img4} alt="" className='blogCardImg' />
                    </div>
                    <div className='blogCardBottom'>
                        <h4 className='blogCardTitle'>What is Lorem Ipsum</h4>
                        <p className='blogCardDescription'>
                            Lorem ipsum has been the indus's standard dummy text ever
                        </p>
                        <Link to="/blog" className='blogCardButton'>.Read More</Link>
                    </div>
                 </div>
                 <div className='blogCard'>
                    <div className='blogCardTop'>
                        <img src={img5} alt="" className='blogCardImg' />
                    </div>
                    <div className='blogCardBottom'>
                        <h4 className='blogCardTitle'>What is Lorem Ipsum</h4>
                        <p className='blogCardDescription'>
                            Lorem ipsum has been the indus's standard dummy text ever
                        </p>
                        <Link to="/blog" className='blogCardButton'>.Read More</Link>
                    </div>
                 </div>
                 <div className='blogCard'>
                    <div className='blogCardTop'>
                        <img src={img6} alt="" className='blogCardImg' />
                    </div>
                    <div className='blogCardBottom'>
                        <h4 className='blogCardTitle'>What is Lorem Ipsum</h4>
                        <p className='blogCardDescription'>
                            Lorem ipsum has been the indus's standard dummy text ever
                        </p>
                        <Link to="/blog" className='blogCardButton'>.Read More</Link>
                    </div>
                 </div>
                 <div className='blogCard'>
                    <div className='blogCardTop'>
                        <img src={img7} alt="" className='blogCardImg' />
                    </div>
                    <div className='blogCardBottom'>
                        <h4 className='blogCardTitle'>What is Lorem Ipsum</h4>
                        <p className='blogCardDescription'>
                            Lorem ipsum has been the indus's standard dummy text ever
                        </p>
                        <Link to="/blog" className='blogCardButton'>.Read More</Link>
                    </div>
                 </div>
                 <div className='blogCard'>
                    <div className='blogCardTop'>
                        <img src={img8} alt="" className='blogCardImg' />
                    </div>
                    <div className='blogCardBottom'>
                        <h4 className='blogCardTitle'>What is Lorem Ipsum</h4>
                        <p className='blogCardDescription'>
                            Lorem ipsum has been the indus's standard dummy text ever
                        </p>
                        <Link to="/blog" className='blogCardButton'>.Read More</Link>
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
