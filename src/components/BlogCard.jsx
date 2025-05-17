
import React from 'react';
import '../../styles/blogCard.css';

export const BlogCard = ({
  variant='primary',
  content={
    image: '',
    category: '',
    title: '',
    body: '',
  },
}) => {

  return (
    <>
      <section className='container'>
        <div className={`blog-card ${variant}`}>
          <div className={`image ${variant}`}>
              <img 
              srcSet={content.image} 
              alt='main-img' 
              style={{
                height: '288px',
                width: '100%',
                objectFit: 'cover',
                borderTopRightRadius: '8px',
                borderTopLeftRadius: '8px',
              }}
              />
          </div>
          <div className={`bot-card ${variant}`}>
            <div className={`bot-label ${variant}`}>
              {content.category}
            </div>
            <div className={`bot-title ${variant}`}>
              <h3>{content.title}</h3>
            </div>
            <div className={`bot-body ${variant}`}>
              {content.body}
            </div>
            <div className={`bot-link ${variant}`}>
              <p href="https://www.linkedin.com/in/jfeliz/">
                Read more
              </p>
              <img
                srcSet='../public/BlogCard/arrow-64.svg'
                style={{
                  width: 'auto',
                  height: '25px',
                  paddingLeft: '10px'
                }} 
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
