import { useContext } from 'react';
import BackgroundContext from './BackgroundContext';
import '../styles/Myprojects.css'

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
        <div>
          <h2>Contact me</h2>
        </div>


      </div>
    </div>
  );
}

export default MyProjects;
