// MyProjects.js
import { useState } from 'react';
import { useContext } from 'react';
import BackgroundContext from './BackgroundContext';
import '../styles/MyProjects.css';
import solarsystem from '/assets/solarsystem.png';
import reactify from '/assets/reactify.png';
import talkbuddy from '/assets/talkbuddy.png';

function MyProjects() {
    const { currentPhotoIndex, photos } = useContext(BackgroundContext);
    const [currentSlide, setCurrentSlide] = useState(0);

    const projects = [
        {
            title: 'The Solar System',
            imgSrc: solarsystem,
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit...',
            link: 'https://myuniverseanimation.netlify.app/'
        },
        {
            title: 'Spotify Clone',
            imgSrc: reactify,
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit...',
            link:'https://reactify-chi.vercel.app/'
        },
        {
            title: 'Talk Buddy',
            imgSrc: talkbuddy,
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit...',
            link:'https://talk-buddy-fullstack.onrender.com/'
        },
    ];

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentSlide((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="main-container">
            <img
                src={photos[currentPhotoIndex]}
                alt="Background"
                loading="lazy"
                style={{ display: 'none' }}
            />
            <div
                className="carousel-container"
                style={{ backgroundImage: `url(${photos[currentPhotoIndex]})` }}
            >                    
                <h1 className='project-title'>{projects[currentSlide].title}</h1>
                <div className="carousel">
                    <button onClick={handlePrev} className="prev">&#10094;</button>
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`slide ${index === currentSlide ? 'active' : ''}`}
                        >
                            <a href={project.link} target='blank'>
                                <img
                                    src={project.imgSrc}
                                    alt={project.title}
                                    className="carousel-image" 
                                />
                            </a>
                        </div>
                    ))}
                    <button onClick={handleNext} className="next">&#10095;</button>
                </div>
                <div className="text">
                    <div className='paragraph-text' style ={{background:'none'}}>{projects[currentSlide].text}</div>
                </div>
            </div>
        </div>
    );
}

export default MyProjects;
