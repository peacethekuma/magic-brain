import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain-logo.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className='ma4 mt0 center'>
      <Tilt className="Tilt br2 shadow-2" options={{ max: 60 }} style={{ height: 180, width: 180 }} >
        <div className="Tilt-inner"> 
          <img style={{paddingTop:'1rem'}} alt='logo'  src={brain} />
          <p className="b mb1">Magic Brain</p>
        </div>
      </Tilt>
    </div>
  )
}

export default Logo;