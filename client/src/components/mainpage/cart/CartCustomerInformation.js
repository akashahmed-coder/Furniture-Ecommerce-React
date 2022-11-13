import React, { useState } from 'react'
import customerImg from "../../../img/img-8.webp"
import CartOrderSummeryProduct from './CartOrderSummeryProduct'

const CartCustomerInformation = () => {
  const [onEditUser, setOnEditUser] = useState(false)
  const [onEditUserAdress, setOnEditUserAdress] = useState(false)
  const [userInfo , setUserInfo] = useState({name:"",email:""})
  const [userAdress, setUserAdress] = useState({HouseNO:"",policeStation:"",distric:"",postCode:""})


  
  


  const handleChangeUser = (e) => {
     const {name , value} = e.target
     setUserInfo({...userInfo,[name]:value})
  }
  const handleChangeUserAdress = (e) => {
    const {name , value} = e.target
    setUserAdress({...userAdress,[name]:value})
 }
  return (
    <div className='cartCustomerInfo'>
        <h3 className='cartCustomerInfoTitle'>Customer Information</h3>
        <div className='cartCustomerDetails'>
             <div className='cartCustomerImgAndInfo'>
                <img src={customerImg} className="cartCustomerImg"/>
                <div className='cartCustomerNameAndEmail'>
                   {
                    onEditUser?
                    <>
                    <input type="text" name="name" placeholder='Enter Name' value={userInfo.name} onChange={handleChangeUser} className="cartcustomerInput"/>
                    <input type="email" name="email" placeholder='Enter Email' value={userInfo.email} onChange={handleChangeUser}className="cartcustomerInput"/>
                    </>:
                    <>
                    <h4 className='cartCustomerName'>{userInfo.name === ""? "Jhon Doe":userInfo.name}</h4>
                    <p className='cartCustomerEmail'>{userInfo.email === ""? "jhon@gmail.com":userInfo.email}</p>
                    </>
                   }
                </div>
             </div>
            <button className='cartCustomerButton' onClick={()=>setOnEditUser(!onEditUser)}>{onEditUser?"Submit":"Change"}</button>
        </div>
        <div className='deliveryAdress'>
        <h3 className='deliveryAdressTitle'>Delivery Address</h3>
          <diV className="deliveryAdressWrapper">
           <div className='deliveryAdressDiv'>
           {
            onEditUserAdress?
            <>
            <input type="text" name="HouseNO" placeholder='House No.' value={userAdress.HouseNO} onChange={handleChangeUserAdress} className="cartcustomerInput"/>
            <input type="text" name="policeStation" placeholder='Police Station' value={userAdress.policeStation} onChange={handleChangeUserAdress}className="cartcustomerInput"/>
            <input type="text" name="distric" placeholder='Distric.' value={userAdress.distric} onChange={handleChangeUserAdress} className="cartcustomerInput"/>
            <input type="text" name="postCode" placeholder='Post Code' value={userAdress.postCode} onChange={handleChangeUserAdress}className="cartcustomerInput"/>
            </>:
            <>
             <span className='HouseNO'>{userAdress.HouseNO? userAdress.HouseNO:"76/A Maniknagar Miazan Lane"},</span>
             <span className='policeStation'>{userAdress.policeStation? userAdress.policeStation:"Mugda"},</span>
             <span className='distric'>{userAdress.distric? userAdress.distric:"Dhaka"},</span>
             <span className='postCode'>{userAdress.postCode? userAdress.postCode:"1203"}</span>
            </>
           }
          </div>
          <button className='cartCustomerButton'onClick={()=>setOnEditUserAdress(!onEditUserAdress)}>{onEditUserAdress?"Submit":"Change"}</button>
          </diV>
        </div>
        <div className='cartCustomerOrderSummery'>
        <h3 className='deliveryAdressTitle'>Order Summery</h3>
          <div className='cartCustomerProduct'>
          <CartOrderSummeryProduct/>
          </div>
        </div>
        
    </div>
  )
}

export default CartCustomerInformation
