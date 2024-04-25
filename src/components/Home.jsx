/* eslint-disable react/no-unescaped-entities */
import { useContext, useEffect, useRef } from 'react';
import BackgroundContext from './BackgroundContext';
import { gsap } from "gsap";
import { SiCss3, SiHtml5, SiNodedotjs,SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import '../styles/Home.css';
import logo from "/assets/logo.svg"
import resume from "/assets/Razvan Stan_CV.pdf"
import raz from "/assets/raz_b&w.jpeg"

function Home() {
  const { currentPhotoIndex, photos } = useContext(BackgroundContext);
  const containerRef = useRef(null);

  useEffect(() => {
    const containerElement = containerRef.current;

    gsap.from(containerElement, {
      scale: 0, // Start with container scaled down
      duration: 5,
      ease: "back.out(1.7)", // Add a bounce effect
      yoyo: true, // Reverse animation on each repetition
    });
  }, []);

  const openResume = () => {
    window.open(resume, '_blank');
  };

  return (
    <div className="container" style={{
      backgroundImage: `url(${photos[currentPhotoIndex]})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      width: '100vw',
    }}>
      <div className="left-column">
        <img
          className="text-flicker-in-glow"
          src={logo}
          alt="Your Logo"
          style={{ width: '100%' }}
        />
      </div>
      <div className="right-column">
        <div className="middle-column" style={{
          borderRadius: '50%',
          overflow: 'hidden',
          width: '22rem', // Set the width slightly bigger than the photo
          height: '22rem', // Set the height slightly bigger than the photo
        }} ref={containerRef}>
          <img
            className="cv-foto"
            src={raz}
            alt="Your Photo"
            style={{ width: '100%', borderRadius: '50%' }} // Set image width to 100%
          />
        </div>

        <p style={{ width: '80%', padding: '1.2rem', fontSize: '1.2rem', backgroundColor: 'transparent', opacity: 1, color: 'black', background: 'rgba(255, 255, 255, 0.4)', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)', backdropFilter: 'blur(8.5px)', WebkitBackdropFilter: 'blur(6.5px)', borderRadius: '30px', border: '1px solid rgba(255, 255, 255, 0.18)', textAlign: 'justify', marginTop: '50px' }}>
          Exploring the world of
          <span className = "web-dev">
           Web Development
          </span>,
          I've dived into the art of crafting digital experiences. Proficient in
          <span className='skills'>
            HTML, CSS, JavaScript, React, and Node.js
          </span>,
          I'm on a mission to create web solutions that captivate and innovate, blending analytical thinking with a touch of artistry. If you want to learn more about my educational background and past experiences, simply click to view my
          <a href="#" data-replace="get a link" onClick={openResume}>
            <span className='resume'>
              RESUME.
            </span>
          </a>
          <br />
          <div className='skills-icons'>
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
