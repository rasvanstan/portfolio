import { useContext, useEffect, useRef, useState } from 'react';
import BackgroundContext from './BackgroundContext';
import { gsap } from 'gsap';
import { SiCss3, SiHtml5, SiNodedotjs, SiMongodb } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import '../styles/Home.css';
import logo from '../../public/assets/logo.svg';
import resume from '../../public/assets/Razvan Stan_CV.pdf';
import raz from '../../public/assets/raz_b&w.jpeg';

function Home() {
  const { currentPhotoIndex, photos, setCurrentPath } = useContext(BackgroundContext);
  const containerRef = useRef(null);
  const [initialized, setInitialized] = useState(false); // State to track if the component has initialized

  useEffect(() => {
    const containerElement = containerRef.current;

    gsap.from(containerElement, {
      scale: 0, // Start with container scaled down
      duration: 5,
      ease: 'back.out(1.7)', // Add a bounce effect
      yoyo: true, // Reverse animation on each repetition
    });

    // Set initialized to true after the initial animation
    setTimeout(() => {
      setInitialized(true);
    }, 5000); // Adjust the timeout to match the duration of the animation
  }, []);

  useEffect(() => {
    // Set the current path to the index of the current background image only if the component has initialized
    if (initialized) {
      setCurrentPath(currentPhotoIndex);
    }
  }, [currentPhotoIndex, setCurrentPath, initialized]);

  const openResume = () => {
    window.open(resume, '_blank');
  };

  return (
    <div
      className="container"
      style={{
        backgroundImage: `url(${photos[currentPhotoIndex]})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        width: '100vw',
      }}
    >
      <div className="left-column">
        <img className="text-flicker-in-glow" src={logo} alt="Your Logo" style={{ width: '100%' }} />
      </div>
      <div className="right-column">
        <div
          className="middle-column"
          style={{
            borderRadius: '50%',
            overflow: 'hidden',
            width: '22rem', // Set the width slightly bigger than the photo
            height: '22rem', // Set the height slightly bigger than the photo
          }}
          ref={containerRef}
        >
          <img
            className="cv-foto"
            src={raz}
            alt="Your Photo"
            style={{ width: '100%', borderRadius: '50%' }} // Set image width to 100%
          />
        </div>

        <p style={{ width: '80%', marginTop: '50px' }}>
          Exploring the world of
          <span className="web-dev">Web Development</span>, I've dived into the art of crafting digital experiences.
          Proficient in
          <span className="skills">HTML, CSS, JavaScript, React, and Node.js</span>, I'm on a mission to create web
          solutions that captivate and innovate, blending analytical thinking with a touch of artistry. If you want to
          learn more about my educational background and past experiences, simply click to view my
          <a href="#" data-replace="get a link" onClick={openResume}>
            <span className="resume">RESUME.</span>
          </a>
          <br />
          <div className="skills-icons">
            <SiHtml5 />
            <SiCss3 />
            <IoLogoJavascript />
            <FaReact />
            <SiNodedotjs />
            <SiMongodb />
          </div>
        </p>
      </div>
    </div>
  );
}

export default Home;
