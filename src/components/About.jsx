// About.jsx
import { useContext } from 'react';
import BackgroundContext from './BackgroundContext';
import '/home/dci-student/Desktop/Projects/portfolio/src/styles/About.css'

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
        className='container-about'
        style={{
          backgroundImage: `url(${photos[currentPhotoIndex]})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          width: '100vw',
          height: '100vh'
        }}
      >
        <div className="column1">
          <img className='plane1' src="../src/assets/plane1.jpeg" alt="raz on a trolley in the aircraft"/>
          <img className='plane2' src="../src/assets/plane2.jpeg" alt="raz on a trolley in the aircraft"/>
          <img className='plane3' src="../src/assets/plane3.jpeg" alt="raz on a trolley in the aircraft"/>
        </div>
        <div className="column2">
          <h1>So who am I?</h1>
          <p>This is where you can provide information about yourself.</p>
        </div>
        <div className="column3">Content for third column</div>
      </div>
    </div>
    
  );
}

export default About;
