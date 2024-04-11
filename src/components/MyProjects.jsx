import { useContext } from 'react';
import BackgroundContext from './BackgroundContext';
import '/home/dci-student/Desktop/Projects/portfolio/src/styles/Myprojects.css'

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
        <div className='my-projects'>
          <h1>My Projects</h1>
          <div>
            <h1>The solar system</h1>
          </div>
          <p>This is where you can showcase your projects.</p>
        </div>
      </div>
    </div>
  );
}

export default MyProjects;
