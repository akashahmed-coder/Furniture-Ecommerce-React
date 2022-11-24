import React from 'react'
import {LocationOnOutlined,LocalPhoneOutlined  ,EmailOutlined,MeetingRoomOutlined} from '@mui/icons-material'
import Header from '../header/Header'
import Footer from '../../footer/Footer'

export default function Contact () {
  return (
    <div className='contact'>
      <Header p={``} H={`Contact Us`}/>
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
                   <button className='submitContactButton'>Submit</button>
               </div>
            </div>
            <div className='contactRight'>
               <div className='contactRigthInfo'>
               <h3 className='contactRightHeading'>Contact Us</h3>
                 <div className='contactRightIconAndItem'>
                   <LocationOnOutlined className='contactRightIcon' fontSize='50px' />
                  <div className='contactRigthItem'>
                    <h4 className='contactRightTitle'>
                      Adress
                    </h4>
                    <p className='contactRightItemDescription'>
                      76/2 Maniknagar, Wari Dhaka-1203
                    </p>
                  </div>
                    
                 </div>

                 <div className='contactRightIconAndItem'>
                   <LocalPhoneOutlined className='contactRightIcon'/>
                  <div className='contactRigthItem'>
                    <h4 className='contactRightTitle'>
                      Phone
                    </h4>
                    <p className='contactRightItemDescription'>
                      +8801886351200
                    </p>
                  </div>
                    
                 </div>
                 <div className='contactRightIconAndItem'>
                   <EmailOutlined className='contactRightIcon'/>
                  <div className='contactRigthItem'>
                    <h4 className='contactRightTitle'>
                      Gmail
                    </h4>
                    <p className='contactRightItemDescription'>
                     ahmefakash3@gmail.com
                    </p>
                  </div>
                    
                 </div>
                 <div className='contactRightIconAndItem'>
                   <MeetingRoomOutlined className='contactRightIcon'/>
                  <div className='contactRigthItem'>
                    <h4 className='contactRightTitle'>
                      Office
                    </h4>
                    <p className='contactRightItemDescription'>
                      Dhaka, Bangladesh
                    </p>
                  </div>
                    
                 </div>
                 
               </div>
            </div>
          </div>
        </div>
        <Footer/>
    </div>
  )
}
