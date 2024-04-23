import { useState } from 'react';
import { useContext } from 'react';
import BackgroundContext from './BackgroundContext';
import '../styles/Contact.css';

function Contact() {
 const { currentPhotoIndex, photos } = useContext(BackgroundContext);

 // State to store form data
 const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    comments: ''
 });

 // State for managing the visibility of the popup
 const [showPopup, setShowPopup] = useState(false);

 // Handle form input changes
 const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
 };

 // Handle form submission
 const handleSubmit = (e) => {
    e.preventDefault();
    // Send form data to backend or handle it as needed
    console.log(formData);
    // Reset form fields
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      comments: ''
    });
    // Show the popup
    setShowPopup(true);
    // After 3 seconds, hide the popup
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
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
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div className='form-container'>
          <h2>Contact me</h2>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="comments">Comments/Questions:</label>
              <textarea
                id="comments"
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button 
              id="submit-button" 
              type="submit" 
              style={{
              backgroundColor: '#FFA500',
              width:'6rem',
              color: 'white',
              padding: '0.7rem 1rem',
              borderRadius: '1rem',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'background-color 0.3s ease',
              marginBottom: '1rem'
            }}>
              Submit
            </button>
          </form>
        </div>
      </div>
      {showPopup && (
        <div className="popup">
          <p>Your message was sent! Thank you.</p>
        </div>
      )}
    </div>
 );
}

export default Contact;
