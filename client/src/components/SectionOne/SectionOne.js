import React from 'react'
import imgHome from '../../img/img-3.webp'
import imgAbout from '../../img/img-6.webp'
export default function SectionOne({about}) {
  return (
    <div>
         <div className={about?'About-sectinOne':'home-sectinOne'}>
       <div className='container'>
        <div className='home-sectinOneWrapper'>

        
               <div className='img-sectionOne'>
               <img className={about?'sectionOneImgForabout':'sectionOneImgForHome'} src={about? imgAbout:imgHome} alt=''/>
               <div className='backpart-SectionOne-Img'>

               </div>
               </div>
               <div className='details-sectionOne'>
                  <p className='details-sectionOne-miniTitle'>{about? "Who We Are?": "Welcome to Our Store"}</p>
                  <h2>
                     we create the product you tell us your wish existed
                  </h2>
                  <p  className='details-sectionOne-title'> Lorem Ipsum generators on the Internet tend to repeat predefined 
                    chunks as necessary, making this the first true generator on the Internet. 
                    It uses a dictionary of over 200 Latin words, combined with a handful of model s
                    entence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem
                     Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                     <button>{about?"Explore More":"Read More"}</button>
               </div>
              
           </div>
           </div>
       </div>
      
    </div>
  )
}
