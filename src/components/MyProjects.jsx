import React from 'react';
import { useContext } from 'react';
import BackgroundContext from './BackgroundContext';
import '../styles/Myprojects.css';
import solarsystem from '/assets/solarsystem.png';
import reactify from '/assets/reactify.png';
import talkbuddy from '/assets/talkbuddy.png';

function MyProjects() {
 const { currentPhotoIndex, photos } = useContext(BackgroundContext);

 // Define an array of projects
 const projects = [
    {
      title: 'The Solar System',
      imgSrc: solarsystem,
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident voluptas, labore molestiae, porro dolorem ea accusantium explicabo minima error, fuga enim ipsum ipsa mollitia eveniet accusamus voluptates! Distinctio, quia mollitiaLorem ipsum, dolor sit amet consectetur adipisicing elit. Provident voluptas, labore molestiae, porro dolorem ea accusantium explicabo minima error, fuga enim ipsum ipsa mollitia eveniet accusamus voluptates! Distinctio, quia mollitiaLorem ipsum, dolor sit amet consectetur adipisicing elit. Provident voluptas, labore molestiae, porro dolorem ea accusantium explicabo minima error, fuga enim ipsum ipsa mollitia eveniet accusamus voluptates! Distinctio, quia mollitia'
    },
    {
      title: 'Spotify Clone',
      imgSrc: reactify,
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident voluptas, labore molestiae, porro dolorem ea accusantium explicabo minima error, fuga enim ipsum ipsa mollitia eveniet accusamus voluptates! Distinctio, quia mollitiaLorem ipsum, dolor sit amet consectetur adipisicing elit. Provident voluptas, labore molestiae, porro dolorem ea accusantium explicabo minima error, fuga enim ipsum ipsa mollitia eveniet accusamus voluptates! Distinctio, quia mollitiaLorem ipsum, dolor sit amet consectetur adipisicing elit. Provident voluptas, labore molestiae, porro dolorem ea accusantium explicabo minima error, fuga enim ipsum ipsa mollitia eveniet accusamus voluptates! Distinctio, quia mollitia'
    },
    {
      title: 'Talk Buddy',
      imgSrc: talkbuddy,
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident voluptas, labore molestiae, porro dolorem ea accusantium explicabo minima error, fuga enim ipsum ipsa mollitia eveniet accusamus voluptates! Distinctio, quia mollitiaLorem ipsum, dolor sit amet consectetur adipisicing elit. Provident voluptas, labore molestiae, porro dolorem ea accusantium explicabo minima error, fuga enim ipsum ipsa mollitia eveniet accusamus voluptates! Distinctio, quia mollitiaLorem ipsum, dolor sit amet consectetur adipisicing elit. Provident voluptas, labore molestiae, porro dolorem ea accusantium explicabo minima error, fuga enim ipsum ipsa mollitia eveniet accusamus voluptates! Distinctio, quia mollitia'
    }
 ];

 return (
    <div className="main-container">
      <img
        src={photos[currentPhotoIndex]}
        alt="Background"
        loading="lazy"
        style={{ display: 'none' }}
      />
      <div
        className="projects-container"
        style={{ backgroundImage: `url(${photos[currentPhotoIndex]})` }}
      >
        <div className="grid-container">
          {projects.map((project, index) => (
            <React.Fragment key={index}>
              <div className="solar-system-container grid-item">
                <img src={project.imgSrc} className="solar-system" />
              </div>
              <div className="info-container grid-item">
                <section>
                 <div className="content">
                    <h1>{project.title}</h1>
                    <p className="solar-system-text">{project.text}</p>
                 </div>
                </section>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
 );
}

export default MyProjects;
