import React from 'react'
import {Check} from '@mui/icons-material';
import detailImg from '../../img/img-16.webp'

export default function Satisfications() {
  return (
    <div className='bottomDescSpacifications'>
          <p className='bottomDescripionsText'>
            Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
            </p>
            <div className='bottomDescImgandDescription'>
            <p className='bottomDescripionsImgText'>
            It uses a dictionary of over 200 Latin words, combined with a handful of model s entence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model s entence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
            </p>
            <img className='bottomDescImg' src={detailImg} alt=''/>
            </div>
            <div className='bottomDsecriptionFeature'>
            <h3 className='bottomDescriptionsTitle'>Feature</h3>
            <div className='perFeature'>
              <Check htmlColor='green' style={{marginRight:"20px"}}/>
             <p className='bottomDescripionsText'> Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
            </div>
            <div className='perFeature'>
              <Check htmlColor='green' style={{marginRight:"20px"}}/>
             <p className='bottomDescripionsText'> Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
            </div>
            <div className='perFeature'>
              <Check htmlColor='green' style={{marginRight:"20px"}}/>
             <p className='bottomDescripionsText'> Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
            </div>
            <div className='perFeature'>
              <Check htmlColor='green' style={{marginRight:"20px"}}/>
             <p className='bottomDescripionsText'> Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
            </div>
            <div className='perFeature'>
              <Check htmlColor='green' style={{marginRight:"20px"}}/>
             <p className='bottomDescripionsText'> Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
            </div>
            <div className='perFeature'>
              <Check htmlColor='green' style={{marginRight:"20px"}}/>
             <p className='bottomDescripionsText'> Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
            </div>
            </div>       
          </div>
  )
}
