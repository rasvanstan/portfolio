import { useContext } from 'react';
import { useState } from "react";
import { motion } from "framer-motion";
import BackgroundContext from './BackgroundContext';
import '/home/dci-student/Desktop/Projects/portfolio/src/styles/Myprojects.css'

function MyProjects() {
  const { currentPhotoIndex, photos } = useContext(BackgroundContext);
  const [isOpen, setIsOpen] = useState(false);

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
        <motion.div 
        className='parent'
        layout
        data-isOpen={isOpen}
        initial={{ borderRadius: 50 }}
        onClick={() => setIsOpen(!isOpen)}
        >
          <motion.div layout className="child" />
        </motion.div>
      </div>
    </div>
  );
}

export default MyProjects;
