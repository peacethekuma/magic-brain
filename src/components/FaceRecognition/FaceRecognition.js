import React from 'react';

const FaceRecignition =({imageUrl})=>{
  return(
    <div className='center mt3'>
      <div className='absolute mt2'>
      <img alt=''src={imageUrl} max-width='500px' height='auto'/>
      </div>
    </div>
  )
}

export default FaceRecignition;