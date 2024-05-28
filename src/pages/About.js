import React from 'react'
import Nav from '../components/Nav';

export default function About() {
  return (
    <>
      <Nav />
      <div className="about-container">
        <section className="about-top">
          <div className='about-me'>
            <h1>Name: Joshua Da Costa</h1>
            <p className='about-p'>I am a software developer located out of the Greater Toronto Area i specialize in creating MERN Full-Stack applications great for marketing your buisness. I hae a degree in software engineering and have been building applications for clients since 2020. I am to provide olny the fastes and smoothest application use.</p>
            <a href={require("../docs/Resume2024.pdf")} target='blank'>My Resume PDF link</a>
          </div>

          <img
            className="me-img"
            width="400px"
            src="https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg"
            alt='me'
          ></img>
        </section>
      </div>
    </>
  );
}
