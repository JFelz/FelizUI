
import React from 'react';
import '../styles/blogCard.css';

export const BlogCard = ({
  mode='primary',
  content={
    image: '',
    category: '',
    title: '',
    body: '',
  },
}) => {

  return (
    <>
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet"
      />
    </head>
    <body>
      <section className='container'>
        <div className={`blog-card ${mode}`}>
          <div className={`image ${mode}`}>
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
          <div className={`bot-card ${mode}`}>
            <div className={`bot-label ${mode}`}>
              {content.category}
            </div>
            <div className={`bot-title ${mode}`}>
              <h3>{content.title}</h3>
            </div>
            <div className={`bot-body ${mode}`}>
              {content.body}
            </div>
            <div className={`bot-link ${mode}`}>
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
    </body>
    </>
  )
}
