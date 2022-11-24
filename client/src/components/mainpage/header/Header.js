import React from 'react'
import Navber from '../navber/Navber'

 const Header = ({p,H}) => {
  return (
    <div>
        <div className='Header'> 
            <Navber/>
            <div className='container'>
                <div className='HeaderText'>
                    <p>{p}</p>
                    <h1>{H}</h1>
                </div> 
            </div>
        </div>
    </div>
  )
}
export default Header;