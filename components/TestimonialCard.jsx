import React from 'react';
import '../styles/testimonialCard.css';

export const TestimonialCard = ({
  firstName='Sarah', 
  lastName='Dole', 
  userTag='sarahdole', 
  content={
    body:''
  } 
}) => {

  return(
    <>
      <div>
        <section id="hero">
          <div class="testimonial-card">
            <div class="top-card">
              <div>
                <picture>
                  <source type="image/webp" srcset="../public/TestimonialCard/profile-thumbnail.webp" />
                  <img src="../public/TestimonialCard/profile-thumbnail.png" alt="profile-img" style={{ minWidth: '48px', height: '48px'}} />
                </picture>
              </div>
              <div class="name-block">
                <div class="name-title">
                  <p>{firstName + ' ' + lastName}</p>
                </div>
                <div class="name-tag">
                  <p>@{userTag}</p>
                </div>
              </div>
            </div>
            <div class="bottom-card">
              <p>{content.body}</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
