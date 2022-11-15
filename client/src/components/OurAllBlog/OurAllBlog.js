import React from 'react'
import img1 from '../../img/img-1.webp'
import img2 from '../../img/img-2.webp'
import img3 from '../../img/img-3.webp'
import img4 from '../../img/img-4.webp'
import img5 from '../../img/img-5.webp'
import img6 from '../../img/img-6.webp'
import img7 from '../../img/img-7.webp'
import img8 from '../../img/img-13.webp'
import img9 from '../../img/img-9.1.webp'
import img10 from '../../img/img-9.webp'
import img11 from '../../img/img-14.webp'
import img12 from '../../img/img-15.webp'
import {Rating,Pagination, Select , MenuItem , FormControl , InputLabel} from '@mui/material'
import './ourAllBlog.css'
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

              </div>
        <div className='ourProductspagination'>
          <Pagination count={10} color="primary" size='large'  />
          </div>
          </div>

        </div>

      </>
  )
}
