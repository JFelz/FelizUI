import React from 'react';
import { useState, useEffect } from 'react';
import '../styles/card.css';

export const TestimonialCard = ({ 
  firstName='Sarah', 
  lastName='Dole', 
  userTag='sarahdole', 
  bodyContent = 'I\'ve been searching for high-quality abstract images for my design projects, and I\'m thrilled to have found this platform. The variety and depth of creativity are astounding!',
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
              <p>{bodyContent}</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
