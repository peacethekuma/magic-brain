import React from 'react';
import './FaceRecignition.css'

const FaceRecignition = ({ imageUrl,box }) => {
  return (
    <div className='center mt3'>
      <div className='absolute mt2'>
        <img id='inputImage' alt='' src={imageUrl} max-width='500px' height='auto' />
        <div className='bounding-box' style={{top:box.topRow,right:box.rightCol,bottom:box.bottomRow,left:box.leftCol}}></div>
      </div>
    </div>
  )
}

export default FaceRecignition;