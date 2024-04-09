import React, { useContext, useEffect, useState } from 'react';
import BackgroundContext from './BackgroundContext';
import '../styles/Contact.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

function Contact() {
  const { currentPhotoIndex, photos, changeTheme } = useContext(BackgroundContext);
  const [prevPhotoIndex, setPrevPhotoIndex] = useState(-1);

  useEffect(() => {
    if (currentPhotoIndex !== prevPhotoIndex) {
      setPrevPhotoIndex(currentPhotoIndex);
    }
  }, [currentPhotoIndex, prevPhotoIndex]);

  return (
    <div className="contact-container">
      <TransitionGroup>
        <CSSTransition
          key={currentPhotoIndex}
          classNames="fade"
          timeout={1000} // Duration of the transition
        >
          <div
            className="background-container"
            style={{
              backgroundImage: `url(${photos[currentPhotoIndex]})`,
            }}
          >
            <div className="content">
              <h1>Contact Me</h1>
              <p>This is where users can find ways to contact you.</p>
            </div>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default Contact;
