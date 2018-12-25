import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange,onButtonSubmit,input }) => {
  return (
    <div>
      <p className='f3'>
        {'This Magic Brain will detect faces in your pictures. Give it a try'}
      </p>
      <div className='center '>
        <div className=' pa4 br3 shadow-2 center w700'>
          <input className="f4 pa2 w-70 center" type="tex" onChange={onInputChange} value={input}/>
          <button className='w-30 f5 grow link ph1 pv2 dib white button' onClick={onButtonSubmit}>Detect</button>
        </div>
      </div>
    </div>
  )
}

export default ImageLinkForm;