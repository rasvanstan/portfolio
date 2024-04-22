import { useContext } from 'react';
import { useState } from "react";
import { motion } from "framer-motion";
import BackgroundContext from './BackgroundContext';
import '../styles/Myprojects.css'

function MyProjects() {
  const { currentPhotoIndex, photos } = useContext(BackgroundContext);
  const [isOpen, setIsOpen] = useState({
    solarSystem: false,
    spotifyClone: false,
    talkBuddy: false
  });

  const handleToggle = (project) => {
    setIsOpen({
      ...isOpen,
      [project]: !isOpen[project]
    });
  };

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
          display: 'flex',
          flexDirection: 'column', // Make the container flex column
          justifyContent: 'flex-end' // Align items to the bottom
        }}
      >
        <motion.div 
          className='solar-system'
          layout
          data-isOpen={isOpen.solarSystem}
          initial={{ borderRadius: 50 }}
          onClick={() => handleToggle('solarSystem')}
          style={{ marginBottom: isOpen.solarSystem ? 'auto' : 'none' }} // Move it to the top when opened
        >
          <h1>The Solar System</h1>
          <motion.div layout className="child"></motion.div>
        </motion.div>
        
        <motion.div 
          className='spotify-clone'
          layout
          data-isOpen={isOpen.spotifyClone}
          initial={{ borderRadius: 50 }}
          onClick={() => handleToggle('spotifyClone')}
          style={{ marginBottom: isOpen.spotifyClone ? 'auto' : 'none' }} // Move it to the top when opened
        >
          <h1>Spotify Clone</h1>
          <motion.div layout className="child"></motion.div>
        </motion.div>
        
        <motion.div 
          className='talk-buddy'
          layout
          data-isOpen={isOpen.talkBuddy}
          initial={{ borderRadius: 50 }}
          onClick={() => handleToggle('talkBuddy')}
          style={{ marginBottom: isOpen.talkBuddy ? 'auto' : 'none' }} // Move it to the top when opened
        >
          <h1>Talk Buddy</h1>
          <motion.div layout className="child"></motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default MyProjects;
