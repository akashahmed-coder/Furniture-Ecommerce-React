import React from 'react'
import {LocalAtm, Receipt, RoomService} from '@mui/icons-material';
export default function ServiceAbout() {
  return (
    <div className='serviceAbout'>
        <div className='container'>
        <div className='serviceAboutWrapper'>
            <div className='perService'>
            <RoomService htmlColor='orange' className='perServiceIcon'/>
            <div className='perServiceText'>
               <h3 className='perServiceTitle'>Full Fast Delivery</h3>
               <span className='perServiceDetial'>Within 48 hours</span>
            </div>
            </div>
            <div className='perService'>
            <LocalAtm htmlColor='orange'  className='perServiceIcon'/>
            <div className='perServiceText'>
               <h3 className='perServiceTitle'>Cash On Delivery</h3>
               <span className='perServiceDetial'>All over the country</span>
            </div>
            </div>
            <div className='perService'>
            <Receipt htmlColor='orange'  className='perServiceIcon'/>
            <div className='perServiceText'>
               <h3 className='perServiceTitle'>Seasonal Sale</h3>
               <span className='perServiceDetial'>Discounts up to 50% on all</span>
            </div>
            </div>
        </div>

        </div>
        
    </div>
  )
}
