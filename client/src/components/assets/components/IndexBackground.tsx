import React from 'react';
import videoBg from '../videos/Pexels_Videos_1851190.mp4';

const IndexBackground = () => {
  return (
      <video autoPlay loop muted width="100%">
          <source src={videoBg} type="video/mp4"/>
      </video>
  )
}

export default IndexBackground;