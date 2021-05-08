import React from 'react';
import './Image.css';

const Image = ({ imageUrl }) => {
  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img id='inputimage' alt='' src={imageUrl} className='CT'/>
      </div>
    </div>
  );
}

export default Image;
