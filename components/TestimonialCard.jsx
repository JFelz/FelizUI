import React from 'react';
import '../styles/testimonialCard.css';

export const TestimonialCard = ({
  mode='primary',
  user={
  firstName: 'Sarah', 
  lastName: 'Dole', 
  userTag: 'sarahdole'
  },
  content={
    body: ''
  },
}) => {

  return(
    <>
      <div>
        <section id="hero">
          <div id="testimonial-card" className={`testimonial-card ${mode}`}>
            <div className="top-card">
              <div>
                <picture>
                  <source type="image/webp" srcset="../public/TestimonialCard/profile-thumbnail.webp" />
                  <img src="../public/TestimonialCard/profile-thumbnail.png" alt="profile-img" style={{ minWidth: '48px', height: '48px'}} />
                </picture>
              </div>
              <div className="name-block">
                <div className={`name-title ${mode}`}>
                  <p>{user.firstName + ' ' + user.lastName}</p>
                </div>
                <div className={`name-tag ${mode}`}>
                  <p>@{user.userTag}</p>
                </div>
              </div>
            </div>
            <div className={`bottom-card ${mode}`}>
              <p>{content.body}</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
