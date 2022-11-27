import React, { Component } from "react";
import Slider from "react-slick";
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
import { Link } from 'react-router-dom'

export default class ReactSlider extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
    };
    return (
      <div>
        <h2>Auto Play & Pause with buttons</h2>
        <Slider ref={slider => (this.slider = slider)} {...settings}>
          <div>
          <div className='ourProductsCard'>
                          <div className='ourProductscardTop'>
                             <Link to='/details/product'>
                              <img src={img3} alt='' className='ourProductsCardImg'/>
                              </Link>
                              <span className='ourProductsCardTag'>New</span>
                          </div>
                          <div className='ourProductscardBottom'>
                          <Rating style={{marginTop:"10px"}}name="half-rating" defaultValue={2.5} precision={0.5} readOnly />
                          <h4 className='ourProductsCardbottomTitle'>Single Safa</h4>
                          <span className='ourProductsCardbottomText'>Lorem ipsum has been</span>
                          <div className='ourProductsCardPriceAndButton'>
                                  <span className='ourProductsCardPrice'>$120.00</span>
                                  <Link to="/cart" className='ourProductsCardAndButton'>Add to Cart</Link>
                          </div>
                          </div>
                      </div>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
        <div style={{ textAlign: "center" }}>
          <button className="button" onClick={this.play}>
            Play
          </button>
          <button className="button" onClick={this.pause}>
            Pause
          </button>
        </div>
      </div>
    );
  }
}