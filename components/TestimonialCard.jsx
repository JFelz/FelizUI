import React from 'react';
import '../styles/testimonialCard.css';
import { background } from 'storybook/internal/theming';

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
  cardOverride={
    card: {
      padding: '',
      width: '',
      height: '',
      backgroundColor: '',
      borderRadius: '',
      boxShadow: ''
    },
    nameTitle: {
      fontSize: '',
      lineHeight: '',
      color: '',
      width: '',
      fontWeight: '',
    },
    nameTag: {
      width: '',
      fontSize: '',
      lineHeight: '',
      color: ''
    },
    bottomCard: {
      marginTop: '',
      display: '',
      flexWrap: '',
      color: ''
    }
  },
}) => {

  return(
    <>
      <div>
        <section id="hero">
          <div id="testimonial-card" className={`testimonial-card ${mode}`} style={{ ...cardOverride.card}}>
            <div className="top-card">
              <div>
                <picture>
                  <source type="image/webp" srcset="../public/TestimonialCard/profile-thumbnail.webp" />
                  <img src="../public/TestimonialCard/profile-thumbnail.png" alt="profile-img" style={{ minWidth: '48px', height: '48px'}} />
                </picture>
              </div>
              <div className="name-block">
                <div className={`name-title ${mode}`} style={{ ...cardOverride.nameTitle}}>
                  <p>{user.firstName + ' ' + user.lastName}</p>
                </div>
                <div className={`name-tag ${mode}`} style={{ ...cardOverride.nameTag}}>
                  <p>@{user.userTag}</p>
                </div>
              </div>
            </div>
            <div className={`bottom-card ${mode}`} style={{ ...cardOverride.bottomCard}}>
              <p>{content.body}</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
