// MyProjects.js
import { useState } from 'react';
import { useContext } from 'react';
import BackgroundContext from './BackgroundContext';
import '../styles/MyProjects.css';
import solarsystemVideo from '/assets/solarsystem.mp4';
import reactify from '/assets/reactify.mp4';
import talkbuddyVideo from '/assets/talkbuddy.mp4';


function MyProjects() {
    const { currentPhotoIndex, photos } = useContext(BackgroundContext);
    const [currentSlide, setCurrentSlide] = useState(0);

    const projects = [
        {
            title: 'The Solar System',
            imgSrc: solarsystemVideo,
            text: "Embark on our journey exploring the HTML/CSS/Bootstrap Solar System, a collaborative project by three students over three weeks. Experience planet orbits animated with CSS and Bootstrap for responsive design. Click planets for fascinating facts, seamlessly interacting with each element. Bootstrap ensures compatibility across devices, highlighting our teamwork's strength. Dive into our first project to discover the wonders of our cosmic neighborhood—a testament to our growth and dedication as aspiring web developers. It was a lot of fun creating it!!",
            link: 'https://myuniverseanimation.netlify.app/',
            technologies: "HTML | CSS | BOOTSTRAP"
        },
        {
            title: 'Spotify Clone',
            imgSrc: reactify,
            text: "Enter the world of Reactify, a Spotify clone crafted entirely in React, nodding to the music streaming giant. By accessing the Spotify personal token via Spotify for Developers, Reactify fetches real data from my Spotify account, ensuring a fully functional experience. Seamlessly integrated with Spotify's APIs, this project mirrors the beloved platform's functionality. From browsing playlists to playing tracks, Reactify brings the Spotify experience to life within a React environment. Immerse yourself in the world of music with Reactify, where React's power and Spotify's APIs combine to create a seamless and enjoyable listening experience.",
            link: 'https://reactify-chi.vercel.app/',
            technologies: "React | JavaScript | HTML | SCSS"

        },
        {
            title: 'Talk Buddy',
            imgSrc: talkbuddyVideo,
            text: "Embark on our journey with TalkBuddy, where students crafted a full-stack marvel for Berlin's language learners. Using MongoDB, React, and Sass, we shaped an inviting UI in Figma, ensuring secure login and vibrant chatrooms for meaningful exchanges. Each line of code symbolizes our dedication to fostering connections in Berlin's diverse linguistic landscape. Through late-night coding sessions, TalkBuddy emerged—a testament to our growth and collaboration. Join our community today, where every click resonates with student-driven innovation, welcoming all to explore, connect, and learn in this vibrant language exchange platform.",
            link: 'https://talk-buddy-fullstack.onrender.com/',
            technologies: "React | HTML | SCSS | NodeJS | MongoDB | Figma | Jira"
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
            <div className="video-mask">
                {project.imgSrc.endsWith('.mp4') ? (
                    <video className="carousel-video" autoPlay loop muted>
                        <source src={project.imgSrc} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <img
                        src={project.imgSrc}
                        alt={project.title}
                        className="carousel-image" 
                    />
                )}
            </div>
        </a>
    </div>
    
))}


                    <button onClick={handleNext} className="next">&#10095;</button>
                </div>
                <div className="text">
                    <div className='paragraph-text' style ={{background:'none'}}>
                        {projects[currentSlide].text} <br />           
                            <b className='technologies'>Technologies used:{" "}{projects[currentSlide].technologies}</b>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default MyProjects;
