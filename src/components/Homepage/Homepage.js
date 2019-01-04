import React from 'react';
import Logo from '../Logo/Logo';
import Rank from '../Rank/Rank';
import ImageLinkForm from '../ImageLinkForm/ImageLinkForm';
import FaceRecognition from '../FaceRecognition/FaceRecognition';

const Homepage = ({ name, entries, onInputChange, onButtonSubmit, onButtonRenew, imageUrl, input, boxes, handleImageUpload }) => {
  return (
    <div>
      <Logo />
      <Rank name={ name } entries={ entries } />
      <ImageLinkForm onInputChange={ onInputChange } onButtonSubmit={ onButtonSubmit } onButtonRenew={ onButtonRenew } imageUrl={ imageUrl } input={ input } faces={ boxes.length } />
      <FaceRecognition boxes={ boxes } imageUrl={ imageUrl } handleImageUpload={ handleImageUpload } input={ input } />
    </div>
  )
}

export default Homepage;