/* eslint-disable react/no-unescaped-entities */
import { useContext } from 'react';
import BackgroundContext from './BackgroundContext';
import '/home/dci-student/Desktop/Projects/portfolio/src/styles/About.css';

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
          <img className='plane2' src="../src/assets/plane2.jpeg" alt="raz in front of the engine"/>
          <img className='plane3' src="../src/assets/plane3.jpeg" alt="raz kissing the engine"/>
        </div>
        <div className="column2">
          <h1 className='title-column2'>So who am I?          <br />
           <span className='subtitle'>A story from aviation to coding</span></h1>
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


            Returning to the realm of web development feels like coming home - a space where I can combine my technical skills with my innate creativity to craft meaningful digital experiences. My journey from the skies to the screen has been one of self-discovery, growth, and a testament to the belief that following one's passion knows no bounds.
          </p>
           </div>
        </div>
        <div className="column3">Content for third column</div>
      </div>
    </div>
  );
}

export default About;
