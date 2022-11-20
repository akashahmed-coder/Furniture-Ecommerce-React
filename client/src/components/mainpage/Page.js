import React from 'react'
import { Routes , Route } from 'react-router-dom'
import About from './about/About'
import Home from './Home/Home'
import NotFound from './NotFound'
import Shop from './shop/Shop'
import Cart from "./cart/Cart"
import DetailsProduct from './detailsPage/DetailsProduct'
import  Blog  from './blog/Blog'
import  Contact  from './contactUs/Contact'

export default function Page() {
  return (
    
    <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/about' element={<About/>} /> 
        <Route path='/shop' element={<Shop/>} /> 
        <Route path='/details/product' element={<DetailsProduct/>} /> 
        <Route path='/blog' element={<Blog/>} /> 
        <Route path='/contact' element={<Contact/>} /> 
        <Route path='/cart' element={<Cart/>} /> 
        <Route path='/cart/:id' element={<Cart/>} />
        <Route path='*' element={<NotFound/>}/>
        
    </Routes>
  
  )
}
