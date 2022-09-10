import React from 'react'
import './detailsProduct.css'
import detailImg from '../../../img/img-16.jpg'
import { Rating,Select , MenuItem , FormControl , InputLabel} from '@mui/material'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import Navber from '../navber/Navber'
import BottomDescriptionProduct from '../../BottomDesciptionProduct/BottomDescriptionProduct';
import SideRatingCount from '../../SideRatingCount/SideRatingCount'
export default function DetailsProduct() {
  return (
    <>
    <div className='detailsProduct'>
        <div className='detailHeader'> 
        <Navber/>
        <div className='container'>
            <div className='detailText'>
            <p>Save This Weekend</p>
            <h1>Product Details</h1>
            </div>
            
        </div>
        </div>
       <div className='container'>
           <div className='detailsProductWrapper'>
             <img className='detailsProductImg' src={detailImg}/>
             <div className='detailsProductDetails'>
                <h2 className='detailsProductTitle'>
                    Wooden Bed - Solimo Cleo Metal King Bed Black
                </h2>
                <div className='detailsStar'>
                <Rating style={{margin:"10px 0px"}}  name="half-rating" defaultValue={3.5} size="large" precision={0.5} readOnly  />
                </div>
                <h3 className='detailsProductPrice'>$113.00</h3>
                <p className='detailsProductDescription'>
                Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model
                </p>
               <div className='detailsProductQuantityandSize'>
                  <div className='quantity'>
                    <span className='quantityText'>quantity</span>
                    <div className='quantityButtonAndCounter'>
                    <button className='quantityButton'>+</button>
                     <span className='quantityCounter'>1</span>
                    <button className='quantityButton'>-</button>
                    </div>
                  </div>
                  <div className='productsSize' style={{width:"200px"}}>
                  <FormControl fullWidth>
                    <span className='quantityText'>Size</span>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={10}
                        label="Age"
                      >
                        <MenuItem value={10}>Large</MenuItem>
                        <MenuItem value={20}>Medium</MenuItem>
                        <MenuItem value={30}>Small</MenuItem>
                      </Select>
                  </FormControl>
                  </div>
               </div>
               <div className='buttonBuyandAddtoCart'>
                  <button className='buyNow'>Buy Now</button>
                  <ShoppingCartCheckoutIcon style={{fontSize:"50px",color:"#555",marginLeft:"10px"}}/>
               </div>
             </div>
           </div>
       </div>
    </div>
    <div className='detailProductBottom'>
      <div className='container'>
        <div className='detailProductBottomWrapper'>
         <SideRatingCount/>
          <BottomDescriptionProduct/>
        </div>
      </div>
    </div>
    </>
  )
}
