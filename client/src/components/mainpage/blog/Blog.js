import React from 'react'
import Header from "../header/Header"
import Rating from '../../rating/Rating'
import Footer from '../../footer/Footer'
import OurAllBlog from "../../OurAllBlog/OurAllBlog"
import BlogSideBar from '../../blogSidebar/BlogSideBar'
export default function Blog () {
  return (
    <div>
        <Header p="Save This Weekend" H="Blog"/>
        <div className='shopProducts'>
        <div className='container'>
          <div className='blogpageAds'>
            <div className='blogSideBarAd1'>
              <div className='sideBarAdText'>
                <span className='sideBarAdTag'>Festival Offer</span>
                <h4 className='sideBarAdTitle'>Up To 20%</h4>
                <button className='sideBarAdButton'>Shop Now</button>
              </div>
            </div>
            <div className='blogSideBarAd2'>
              <div className='sideBarAdText'>
                <span className='sideBarAdTag'>Winter Offer</span>
                <h4 className='sideBarAdTitle'>Up To 26%</h4>
                <button className='sideBarAdButton'>Shop Now</button>
              </div>
            </div>
          </div>
            <div className='shopProductsWrapper'>
            <div className='shopProductsLeft'>
                <BlogSideBar/>
            </div>
            <div className='shopProductsRight'>
            <OurAllBlog/>
            </div>
            </div>
        </div>
        </div>
        
        <Rating/>
      <Footer/>
    </div>
  )
}
