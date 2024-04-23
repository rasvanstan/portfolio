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
            text: "Explore our HTML/CSS/Bootstrap Solar System, a three-week project by three students. Witness planet orbits animated with CSS and Bootstrap for responsiveness. Click planets for facts, interact seamlessly. Bootstrap ensures device compatibility. Collaboration highlights teamwork's power. Discover the wonders of our cosmic neighborhood in our portfolio, a testament to our growth and dedication as web development students.",
            link: 'https://myuniverseanimation.netlify.app/'
        },
        {
            title: 'Spotify Clone',
            imgSrc: reactify,
            text: "Enter the world of Reactify, a Spotify clone crafted entirely in React in a nod to the music streaming giant. Accessing the Spotify personal token through Spotify for Developers, Reactify fetches real data from the user's Spotify account, ensuring a fully functional experience. Seamlessly integrated with Spotify's APIs, this project mirrors the functionality of the beloved platform. From browsing playlists to playing tracks, Reactify brings the Spotify experience to life within a React environment. Immerse yourself in the world of music with Reactify, where the power of React and Spotify's APIs combine to create a seamless and enjoyable listening experience.",
            link: 'https://reactify-chi.vercel.app/'
        },
        {
            title: 'Talk Buddy',
            imgSrc: talkbuddyVideo,
            text: "Embark on our journey with TalkBuddy, our pinnacle project intertwining technology and community for Berlin's language learners. As students, we poured our hearts into crafting a full-stack marvel, harnessing MongoDB for data storage, React for dynamic front-end functionality, and Sass for stylized beauty. In Figma, our design dreams took shape, shaping TalkBuddy's inviting UI.With secure login and registration features, users seamlessly navigate into vibrant chatrooms, fostering meaningful language exchanges. Each line of code symbolizes our dedication to facilitating connections in Berlin's diverse linguistic landscape.Through late-night coding sessions and design deliberations, TalkBuddy emerged—a testament to our growth and collaboration. Join our community today, where every click resonates with student-driven innovation, welcoming all to explore, connect, and learn.",
            link: 'https://talk-buddy-fullstack.onrender.com/'
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
                    <div className='paragraph-text' style ={{background:'none'}}>{projects[currentSlide].text}</div>
                </div>
            </div>
        </div>
    );
}

export default MyProjects;
