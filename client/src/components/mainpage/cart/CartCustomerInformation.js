import React, { useState } from 'react'
import customerImg from "../../../img/img-8.webp"

const CartCustomerInformation = () => {
  const [onEdit, setOnEdit] = useState(false)
  const [userInfo , setUserInfo] = useState({name:"",email:""})


  
  


  const handleChange = (e) => {
     const {name , value} = e.target
     setUserInfo({...userInfo,[name]:value})
  }
  return (
    <div className='cartCustomerInfo'>
        <h3 className='cartCustomerInfoTitle'>Customer Information</h3>
        <div className='cartCustomerDetails'>
             <div className='cartCustomerImgAndInfo'>
                <img src={customerImg} className="cartCustomerImg"/>
                <div className='cartCustomerNameAndEmail'>
                   {
                    onEdit?
                    <>
                    <input type="text" name="name" placeholder='Enter Name' value={userInfo.name} onChange={handleChange} className="cartcustomerInput"/>
                    <input type="email" name="email" placeholder='Enter Email' value={userInfo.email} onChange={handleChange}className="cartcustomerInput"/>
                    </>:
                    <>
                    <h4 className='cartCustomerName'>{userInfo.name === ""? "Jhon Doe":userInfo.name}</h4>
                    <p className='cartCustomerEmail'>{userInfo.email === ""? "jhon@gmail.com":userInfo.email}</p>
                    </>
                   }
                </div>
             </div>
            <button className='cartCustomerButton' onClick={()=>setOnEdit(!onEdit)}>{onEdit?"Submit":"Change"}</button>
        </div>
        <div className='deliveryAdress'>
        <h3 className='deliveryAdressTitle'>Delivery Address</h3>
          <diV className="deliveryAdressWrapper">
           <div className='deliveryAdressDiv'>
           <>
           <span className='HouseNO'>76/A Maniknagar Miazan Lane,</span>
            <span className='policeStation'>Mugda,</span>
            <span className='Distric'>Dhaka,</span>
            <span className='PostCode'>1203</span>
           </>
           <>
           </>
          </div>
          <button className='cartCustomerButton'>Change</button>
          </diV>
        </div>
        
    </div>
  )
}

export default CartCustomerInformation