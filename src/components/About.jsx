import { useRef, useState } from 'react';
import '../styles/About.css';
import MatrixEffect from './MatrixEffect';
import plane1 from "/assets/plane1.jpeg"
import plane2 from "/assets/plane2.jpeg"
import plane3 from "/assets/plane3.jpeg"


function About() {
  // eslint-disable-next-line no-unused-vars
  const [matrixVisible, setMatrixVisible] = useState(true);
  const matrixContainerRef = useRef(null);


  return (
    <>
        <div className={`container-about ${matrixVisible ? 'matrix-visible' : 'matrix-hidden'}`}>
      <div className="column1">
        {/* Your left side content */}
        <img className='plane1 roll-in-blurred-right' src={plane1} alt="raz on a trolley in the aircraft"/>
        <img className='plane2 roll-in-blurred-right2' src={plane2} alt="raz in front of the engine"/>
        <img className='plane3 roll-in-blurred-right3' src={plane3} alt="raz kissing the engine"/>
      </div>
      <div className="column2">
        {/* Your right side content */}
        <h1 className='title-column2'>So who am I?          <br />
          <span className='subtitle'>A story from aviation to coding</span>
        </h1>
        <div className='container-content'>
          <p>
            After completing my education and gaining experience in various office settings, I ventured into a new chapter of my life as a flight attendant. The allure of exploring the world and serving passengers at 30,000 feet proved to be an exhilarating experience. It provided me with the opportunity to hone essential skills in communication, adaptability, and problem-solving, all while traversing the skies.
            <br />
            <br />
            However, amidst the hustle and bustle of the aviation industry, I found myself drawn back to my first passion - web development. During my high school years, I discovered a fascination for coding and building digital solutions that sparked my curiosity and ignited my creativity.
            <br />
            <br />
            Despite pursuing my dream to fly, the desire to delve deeper into the world of technology never waned. After several fulfilling years in aviation, I made the decision to transition back to my roots in web development. It was a leap of faith fueled by my unwavering passion for coding and a longing to immerse myself in the ever-evolving digital landscape.
            <br />
            <br />
            Returning to the realm of web development feels like coming home - a space where I can combine my technical skills with my innate creativity to craft meaningful digital experiences. My journey from the skies to the screen has been one of self-discovery, growth, and a testament to the belief that following one passion knows no bounds.
          </p>

        </div>
      </div>
    </div>
    <div ref={matrixContainerRef} className="matrix-container">
                  <MatrixEffect numRows={50} numCols={20} />

      </div>


    </>

  );
}

export default About;
