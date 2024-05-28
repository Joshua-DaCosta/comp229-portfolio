import React from 'react';
import Nav from '../components/Nav';

export default function Homes() {
  return (
    <div className='home-page'>
      <Nav />
      <div className="home-container">
        <h1>
          Fast and Affordable Software Solutions Directed By CTO -- Joshua Da
          Costa{" "}
        </h1>
        <h2>Misson Statment</h2>
        <p className='mission'>
          "Our mission is to provide top-quality software solutions that meet
          the highest standards of integrity and reliability. We believe in building long-term partnerships with our clients based
          on trust, transparency, and mutual success."
        </p>
      </div>
    </div>
  );
}
