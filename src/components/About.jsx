// About.jsx
import { useContext } from 'react';
import BackgroundContext from './BackgroundContext';

function About() {
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
          height:'100vh'
        }}
      >
        {/* Your about content goes here */}
        <h1>About Me</h1>
        <p>This is where you can provide information about yourself.</p>
      </div>
    </div>
  );
}

export default About;