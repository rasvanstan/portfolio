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
        className='container'
        style={{
          backgroundImage: `url(${photos[currentPhotoIndex]})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          width: '100vw',
          height: '100vh'
        }}
      >
        <div className="item">
          Content for first column
        </div>
        <div className="item">          
          <h1>So who am I?</h1>
          <p>This is where you can provide information about yourself.</p>
        </div>
        <div className="item">Content for third column</div>
      </div>
    </div>
  );
}

export default About;
