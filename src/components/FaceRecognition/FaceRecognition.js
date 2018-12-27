import React from 'react';
import './FaceRecignition.css';
import '../ImageArea/ImageArea';
import { CSSTransition } from 'react-transition-group';
import ImageArea from '../ImageArea/ImageArea';


const FaceRecignition = ({ imageUrl, boxes, handleImageUpload, input }) => {
  const imageBlock = (input) ?
    boxes.map((box,i) => {
      return (
        <CSSTransition
        in={ true }
        appear={ true }
        timeout={ 1000 }
        classNames="fade"
        key={i}
      >
      <div key={ `box${box.topRow}${box.rightCol}` }
          className='bounding-box'
          style={ { top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol } }>
      </div>
      </CSSTransition>
      )
    }) : <ImageArea key={ 'area' } handleImageUpload={ handleImageUpload } />

  return (
    <div className='center'>
        <div className='absolute mt3 mb5'>
          <img id='inputImage' alt='' src={ input } max-width='500px' height='auto' />
          { imageBlock }
        </div>
    </div>
  )
}

export default FaceRecignition;