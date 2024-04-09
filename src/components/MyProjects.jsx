import React, { useContext } from 'react';
import BackgroundContext from './BackgroundContext';

function MyProjects() {
  const { currentPhotoIndex, photos } = useContext(BackgroundContext);

  return (
    <div>
      <img
        src={photos[currentPhotoIndex]}
        alt="Background"
        loading="lazy"
        style={{
          display: 'none', // Hide the actual image, it's used for lazy loading
        }}
      />
      <div
        style={{
          backgroundImage: `url(${photos[currentPhotoIndex]})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          width: '100vw',
          height: '100vh',
        }}
      >
        <div className='My-Projects'>
          <h1>My Projects</h1>
          <p>This is where you can showcase your projects.</p>
        </div>
      </div>
    </div>
  );
}

export default MyProjects;
