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
import {Rating} from '@mui/material'
import { Link } from 'react-router-dom'

export default class Responsive extends Component {
 
  render() {
    var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 2,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1120,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 740,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 555,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
      ]
    };
    return (
      <>
        <Slider {...settings}>
          <div className="sliderCard" style={{marginRight:"10px"}}>
            <img src={img1} alt="" className="SliderCardImg"/>
            <div className="sliderText">
              <h3>Soft Sofa</h3>
              <p>What is lorem ipsum</p>
              <Rating style={{margin:"10px 0px"}}  name="half-rating" defaultValue={3.5} size="small" precision={0.5} readOnly />
            </div>
          </div>
          <div className="sliderCard">
            <img src={img2} alt="" className="SliderCardImg"/>
            <div className="sliderText">
              <h3>Soft Sofa</h3>
              <p>What is lorem ipsum</p>
              <Rating style={{margin:"10px 0px"}}  name="half-rating" defaultValue={3.5} size="small" precision={0.5} readOnly />
            </div>
          </div>
          <div className="sliderCard">
            <img src={img3} alt="" className="SliderCardImg"/>
            <div className="sliderText">
              <h3>Soft Sofa</h3>
              <p>What is lorem ipsum</p>
              <Rating style={{margin:"10px 0px"}}  name="half-rating" defaultValue={3.5} size="small" precision={0.5} readOnly />
            </div>
          </div>
          <div className="sliderCard">
            <img src={img4} alt="" className="SliderCardImg"/>
            <div className="sliderText">
              <h3>Soft Sofa</h3>
              <p>What is lorem ipsum</p>
              <Rating style={{margin:"10px 0px"}}  name="half-rating" defaultValue={3.5} size="small" precision={0.5} readOnly />
            </div>
          </div>
          <div className="sliderCard">
            <img src={img5} alt="" className="SliderCardImg"/>
            <div className="sliderText">
              <h3>Soft Sofa</h3>
              <p>What is lorem ipsum</p>
              <Rating style={{margin:"10px 0px"}}  name="half-rating" defaultValue={3.5} size="small" precision={0.5} readOnly />
            </div>
          </div>
          <div className="sliderCard">
            <img src={img6} alt="" className="SliderCardImg"/>
            <div className="sliderText">
              <h3>Soft Sofa</h3>
              <p>What is lorem ipsum</p>
              <Rating style={{margin:"10px 0px"}}  name="half-rating" defaultValue={3.5} size="small" precision={0.5} readOnly />
            </div>
          </div>
          <div className="sliderCard">
            <img src={img7} alt="" className="SliderCardImg"/>
            <div className="sliderText">
              <h3>Soft Sofa</h3>
              <p>What is lorem ipsum</p>
              <Rating style={{margin:"10px 0px"}}  name="half-rating" defaultValue={3.5} size="small" precision={0.5} readOnly />
            </div>
          </div>
          <div className="sliderCard">
            <img src={img8} alt="" className="SliderCardImg"/>
            <div className="sliderText">
              <h3>Soft Sofa</h3>
              <p>What is lorem ipsum</p>
              <Rating style={{margin:"10px 0px"}}  name="half-rating" defaultValue={3.5} size="small" precision={0.5} readOnly />
            </div>
          </div>
          <div className="sliderCard">
            <img src={img9} alt="" className="SliderCardImg"/>
            <div className="sliderText">
              <h3>Soft Sofa</h3>
              <p>What is lorem ipsum</p>
              <Rating style={{margin:"10px 0px"}}  name="half-rating" defaultValue={3.5} size="small" precision={0.5} readOnly />
            </div>
            
          </div>
          <div className="sliderCard">
            <img src={img10} alt="" className="SliderCardImg"/>
            <div className="sliderText">
              <h3>Soft Sofa</h3>
              <p>What is lorem ipsum</p>
              <Rating style={{margin:"10px 0px"}}  name="half-rating" defaultValue={3.5} size="small" precision={0.5} readOnly />
            </div>
            
          </div>
          <div className="sliderCard">
            <img src={img11} alt="" className="SliderCardImg"/>
            <div className="sliderText">
              <h3>Soft Sofa</h3>
              <p>What is lorem ipsum</p>
              <Rating style={{margin:"10px 0px"}}  name="half-rating" defaultValue={3.5} size="small" precision={0.5} readOnly />
            </div>
            
          </div>
          <div className="sliderCard">
            <img src={img12} alt="" className="SliderCardImg"/>
            <div className="sliderText">
              <h3>Soft Sofa</h3>
              <p>What is lorem ipsum</p>
              <Rating style={{margin:"10px 0px"}}  name="half-rating" defaultValue={3.5} size="small" precision={0.5} readOnly />
            </div>
            
          </div>
        </Slider>
      </>
    );
  }
}