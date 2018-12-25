import React from 'react';
import './FaceRecignition.css';
import '../ImageArea/ImageArea';
import ImageArea from '../ImageArea/ImageArea';


const FaceRecignition = ({ imageUrl, boxes ,handleImageUpload ,input}) => {
  const imageBlock = (input) ?
    boxes.map(box => {
      return (
        <div key={ `box${box.topRow}${box.rightCol}` }
          className='bounding-box'
          style={ { top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol } }>
        </div>
      )
    }): <ImageArea handleImageUpload={handleImageUpload}/>;

  return (
    <div className='center'>
      <div className='absolute mt3 mb5'>
        <img id='inputImage' alt='' src={ input } max-width='500px' height='auto' />
        {imageBlock}
      </div>
    </div>
  )
}

export default FaceRecignition;