import React from 'react'

export default function ShopSideBar() {
  return (
    <div className='shopSideBar'>
        <div className='shopSideBarTop'>
              <h3 className='shopSideBarTitle'>All Category</h3>
              <hr/>
              <ul className='shopSideBarItems'>
                <li className='shopSideBarItem'>All Item</li>
                <li className='shopSideBarItem'>Safas</li>
                <li className='shopSideBarItem'>Tables</li>
                <li className='shopSideBarItem'>Chairs</li>
                <li className='shopSideBarItem'>Beds</li>
                <li className='shopSideBarItem'>Mattresses</li>
                <li className='shopSideBarItem'>Dining Tables</li>
                <li className='shopSideBarItem'>Dining Chairs</li>
              </ul>
        </div>
        <div className='shopSideBarTop'>
              <h3 className='shopSideBarTitle'>Brands</h3>
              <hr/>
              <ul className='shopSideBarItems'>
                <li className='shopSideBarItem'>Edra</li>
                <li className='shopSideBarItem'>Poliform</li>
                <li className='shopSideBarItem'>Chirstophergy</li>
                <li className='shopSideBarItem'>Kartel</li>
                <li className='shopSideBarItem'>Bakar</li>
                <li className='shopSideBarItem'>Bocha Do Lobo</li>
                <li className='shopSideBarItem'>Joybird</li>
                <li className='shopSideBarItem'>RFL Funiture</li>
              </ul>
        </div>
       <div className='shopSIdeBarBottom'>
       <div className='shopSideBarAd1'>
              <div className='sideBarAdText'>
                <span className='sideBarAdTag'>Festival Offer</span>
                <h4 className='sideBarAdTitle'>Up To 20%</h4>
                <button className='sideBarAdButton'>Shop Now</button>
              </div>
            </div>
            <div className='shopSideBarAd2'>
              <div className='sideBarAdText'>
                <span className='sideBarAdTag'>Winter Offer</span>
                <h4 className='sideBarAdTitle'>Up To 26%</h4>
                <button className='sideBarAdButton'>Shop Now</button>
              </div>
            </div>
       </div>
    </div>
  )
}
