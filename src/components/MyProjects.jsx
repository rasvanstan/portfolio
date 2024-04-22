import { useContext } from 'react';
import { useState } from "react";
import BackgroundContext from './BackgroundContext';
import '../styles/Myprojects.css'

function MyProjects() {
  const { currentPhotoIndex, photos } = useContext(BackgroundContext);
  const [isOpen, setIsOpen] = useState({
    solarSystem: false,
    spotifyClone: false,
    talkBuddy: false
  });

 

  return (
    <div className="main-container">
      <img
        src={photos[currentPhotoIndex]}
        alt="Background"
        loading="lazy"
        style={{
          display: 'none', // Hide the actual image, it's used for lazy loading
        }}
      />
      <div
        className="projects-container"
        style={{
          backgroundImage: `url(${photos[currentPhotoIndex]})`,
        }}
      >
        <div className='grid-container'>
          <div className='solar-system-container grid-item'>
            <div
              className='solar-system'
            >
              <div className="child"></div>
            </div>
          </div>
          <div className='info-container grid-item'>
            <section>
              <div className="content">
                <h1>The Solar System</h1>
                <p className='solar-system-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident voluptas, labore molestiae, porro dolorem ea accusantium explicabo minima error, fuga enim ipsum ipsa mollitia eveniet accusamus voluptates! Distinctio, quia mollitiaLorem ipsum, dolor sit amet consectetur adipisicing elit. Provident voluptas, labore molestiae, porro dolorem ea accusantium explicabo minima error, fuga enim ipsum ipsa mollitia eveniet accusamus voluptates! Distinctio, quia mollitiaLorem ipsum, dolor sit amet consectetur adipisicing elit. Provident voluptas, labore molestiae, porro dolorem ea accusantium explicabo minima error, fuga enim ipsum ipsa mollitia eveniet accusamus voluptates! Distinctio, quia mollitia</p>
              </div>
            </section>
          </div>
          <div className='spotify-clone-container grid-item'>
            <div
              className='spotify-clone'
              data-isOpen={isOpen.spotifyClone}
              onClick={() => handleToggle('spotifyClone')}
            >
              <div className="child"></div>
            </div>
          </div>
          <div className='info-container grid-item'>
            <section>
              <div className="content">
                <h1>Spotify Clone</h1>
                <p className='solar-system-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident voluptas, labore molestiae, porro dolorem ea accusantium explicabo minima error, fuga enim ipsum ipsa mollitia eveniet accusamus voluptates! Distinctio, quia mollitiaLorem ipsum, dolor sit amet consectetur adipisicing elit. Provident voluptas, labore molestiae, porro dolorem ea accusantium explicabo minima error, fuga enim ipsum ipsa mollitia eveniet accusamus voluptates! Distinctio, quia mollitiaLorem ipsum, dolor sit amet consectetur adipisicing elit. Provident voluptas, labore molestiae, porro dolorem ea accusantium explicabo minima error, fuga enim ipsum ipsa mollitia eveniet accusamus voluptates! Distinctio, quia mollitia</p>
              </div>
            </section>
          </div>
          <div className='talk-buddy-container grid-item'>
            <div
              className='talk-buddy'
              data-isOpen={isOpen.talkBuddy}
              onClick={() => handleToggle('talkBuddy')}
            >
              <div className="child"></div>
            </div>
          </div>
          <div className='info-container grid-item'>
            <section>
              <div className="content">
                <h1>Talk Buddy</h1>
                <p className='solar-system-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident voluptas, labore molestiae, porro dolorem ea accusantium explicabo minima error, fuga enim ipsum ipsa mollitia eveniet accusamus voluptates! Distinctio, quia mollitiaLorem ipsum, dolor sit amet consectetur adipisicing elit. Provident voluptas, labore molestiae, porro dolorem ea accusantium explicabo minima error, fuga enim ipsum ipsa mollitia eveniet accusamus voluptates! Distinctio, quia mollitiaLorem ipsum, dolor sit amet consectetur adipisicing elit. Provident voluptas, labore molestiae, porro dolorem ea accusantium explicabo minima error, fuga enim ipsum ipsa mollitia eveniet accusamus voluptates! Distinctio, quia mollitia</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProjects;
