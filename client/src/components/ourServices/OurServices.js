import React from 'react'
import "./ourSevices.css"
import {Link} from 'react-router-dom'
import serviceImg1 from '../../img/img-15.webp'
import serviceImg2 from '../../img/img-16.webp'
import serviceImg3 from '../../img/img-17.webp'
import serviceImg4 from '../../img/img-18.webp'
import serviceImg5 from '../../img/img-19.webp'
import serviceImg6 from '../../img/img-20.webp'


export default function OurServices() {
  return (
    <div className='ourServices'>
       <div className='container'>
          <div className='ourServicesWrapper'>
            <div className='ourServicesTop'>
                <div className='ourProductsTitleAndTag'> 
                        <span className='ourProductsTag'>Shopping Store</span>
                        <h2 className='ourProductsTitle'>Buy Trending Furniture</h2>                   
                    </div>
                    <Link to="/shop" className='ourPorductsButton'>View all products</Link>
                </div>
            <div className='ourServicesBottom'>
                <div className='ourServicesCard'>
                    <img className='ourServicesCardImg' src={serviceImg1} alt=''/>
                    <div className='ourServicesCardImgDetails'>
                        <h3 className='ourSevicesCardImgTitle'>
                            Safas: Fabric And Leather
                        </h3>
                        <span className='ourServicesCardImgText'>
                        Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
                        </span>
                        <Link to='/' className='ourServiceCardImgButton'>.Read More</Link>
                    </div>
                </div>
                <div className='ourServicesCard'>
                    <img className='ourServicesCardImg' src={serviceImg2} alt=''/>
                    <div className='ourServicesCardImgDetails activeDetails'>
                        <h3 className='ourSevicesCardImgTitle'>
                            Safas: Fabric And Leather
                        </h3>
                        <span className='ourServicesCardImgText activeText' >
                        Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
                        </span>
                        <Link to='/' className='ourServiceCardImgButton  activeButton'>.Read More</Link>
                    </div>
                </div> <div className='ourServicesCard'>
                    <img className='ourServicesCardImg' src={serviceImg3} alt=''/>
                    <div className='ourServicesCardImgDetails'>
                        <h3 className='ourSevicesCardImgTitle'>
                            Safas: Fabric And Leather
                        </h3>
                        <span className='ourServicesCardImgText'>
                        Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
                        </span>
                        <Link to='/' className='ourServiceCardImgButton'>.Read More</Link>
                    </div>
                </div> <div className='ourServicesCard'>
                    <img className='ourServicesCardImg' src={serviceImg6} alt=''/>
                    <div className='ourServicesCardImgDetails'>
                        <h3 className='ourSevicesCardImgTitle'>
                            Safas: Fabric And Leather
                        </h3>
                        <span className='ourServicesCardImgText'>
                        Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
                        </span>
                        <Link to='/' className='ourServiceCardImgButton'>.Read More</Link>
                    </div>
                </div> <div className='ourServicesCard'>
                    <img className='ourServicesCardImg' src={serviceImg4} alt=''/>
                    <div className='ourServicesCardImgDetails'>
                        <h3 className='ourSevicesCardImgTitle'>
                            Safas: Fabric And Leather
                        </h3>
                        <span className='ourServicesCardImgText'>
                        Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
                        </span>
                        <Link to='/' className='ourServiceCardImgButton'>.Read More</Link>
                    </div>
                </div> <div className='ourServicesCard'>
                    <img className='ourServicesCardImg' src={serviceImg5} alt=''/>
                    <div className='ourServicesCardImgDetails'>
                        <h3 className='ourSevicesCardImgTitle'>
                            Safas: Fabric And Leather
                        </h3>
                        <span className='ourServicesCardImgText'>
                        Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
                        </span>
                        <Link to='/' className='ourServiceCardImgButton'>.Read More</Link>
                    </div>
                </div> 
            </div>
          </div>
       </div>
    </div>
  )
}
