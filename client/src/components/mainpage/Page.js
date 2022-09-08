import React from 'react'
import { Routes , Route } from 'react-router-dom'
import About from './about/About'
import Home from './Home/Home'
import NotFound from './NotFound'
import Shop from './shop/Shop'
import DetailsProduct from './detailsPage/DetailsProduct'

export default function Page() {
  return (
    
    <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/about' element={<About/>} /> 
        <Route path='/shop' element={<Shop/>} /> 
        <Route path='/details/product' element={<DetailsProduct/>} /> 
        <Route path='*' element={<NotFound/>}/>
        
    </Routes>
  
  )
}
