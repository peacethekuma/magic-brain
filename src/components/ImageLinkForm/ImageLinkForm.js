import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onButtonSubmit, input, imageUrl, onButtonRenew, faces }) => {
  const inputBar = (!imageUrl) ?
    <div className=' pa4 br3 shadow-2 center w900 overflow-y-hidden'>
      <input className="f4 pa2 w-70 center" type="tex" onChange={ onInputChange } value={ input } />
      <button className='w-30 f5 grow link ph1 pv2 dib white button' onClick={ onButtonSubmit }>Detect</button>
    </div>
    :
    <div className=' pa4 br3 shadow-2 center w900 overflow-y-hidden'>
      <p className="mr3">{ <span className="f4">{ faces }</span> } faces in this image</p>
      <button className='w-30 f5 grow link ph1 pv2 dib white button' onClick={ onButtonRenew }>Again</button>
    </div>

  return (
    <div>
      <p className='f3 lh-title'>
        { 'This Magic Brain detects faces in your pictures' }
      </p>
      <div className='center '>
        { inputBar }
      </div>
    </div>
  )
}

export default ImageLinkForm;