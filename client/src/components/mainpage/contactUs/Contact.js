import React from 'react'
import "./Contact.css"
import {LocationOn} from '@mui/icons-material'

export default function Contact () {
  return (
    <div className='contact'>
        <div className='container'>
          <div className='contactWrapper'>
          <div className='contactLeft'>
               <div className='contactLeftTop'>
                  <span className='contactLeftTopTag'>Contact Us</span>
                  <h1 className='contactLeftTopTitle'>Tell Us Your Message</h1>
               </div>
               <div className='contactLeftBottom'>
                   <form className='contactform'>
                       <div className='formInputGroup'>
                        <label className='contactLeftBottomInputLabel'>Your Name</label>
                        <input type="text" className='contactLeftBottomInput'  />
                       </div>
                       <div className='formInputGroup'>
                        <label className='contactLeftBottomInputLabel'>Email Address</label>
                        <input type="email" className='contactLeftBottomInput'  />
                       </div>
                       <div className='formInputGroup'>
                        <label className='contactLeftBottomInputLabel'>Phone Number</label>
                        <input type="text" className='contactLeftBottomInput'  />
                       </div>
                       <div className='formInputGroup'>
                        <label className='contactLeftBottomInputLabel'>Subject</label>
                        <input type="text" className='contactLeftBottomInput'  />
                       </div>
                       <div className='formInputGroup'>
                        <label className='contactLeftBottomInputLabel'>Your Message</label>
                        <textarea type="text" className='contactLeftBottomtextbox' rows={5} cols={50} placeholder='Type your message here'></textarea>
                       </div>
                   </form>
               </div>
            </div>
            <div className='contactRight'>
               <h3 className='contactRightTitle'></h3>
               <div className='contactRigthInfo'>
                 <div className='contactRightIconAndItem'>
                   <LocationOn className='contactRightIcon'/>
                  <div className='contactRigthItem'>
                    <h4 className='contactRightTitle'>
                      Adress
                    </h4>
                    <p className='contactRightItemDescription'>
                      76/2 Maniknagar Miazan Lane, Wari Dhaka-1203
                    </p>
                  </div>
                    
                 </div>

                 <div className='contactRightIconAndItem'>
                   <LocationOn className='contactRightIcon'/>
                  <div className='contactRigthItem'>
                    <h4 className='contactRightTitle'>
                      Adress
                    </h4>
                    <p className='contactRightItemDescription'>
                      76/2 Maniknagar Miazan Lane, Wari Dhaka-1203
                    </p>
                  </div>
                    
                 </div>
                 <div className='contactRightIconAndItem'>
                   <LocationOn className='contactRightIcon'/>
                  <div className='contactRigthItem'>
                    <h4 className='contactRightTitle'>
                      Adress
                    </h4>
                    <p className='contactRightItemDescription'>
                      76/2 Maniknagar Miazan Lane, Wari Dhaka-1203
                    </p>
                  </div>
                    
                 </div>
                 <div className='contactRightIconAndItem'>
                   <LocationOn className='contactRightIcon'/>
                  <div className='contactRigthItem'>
                    <h4 className='contactRightTitle'>
                      Adress
                    </h4>
                    <p className='contactRightItemDescription'>
                      76/2 Maniknagar Miazan Lane, Wari Dhaka-1203
                    </p>
                  </div>
                    
                 </div>
                 
               </div>
            </div>
          </div>
        </div>
    </div>
  )
}
