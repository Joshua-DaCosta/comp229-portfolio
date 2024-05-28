import React from 'react'
import Nav from '../components/Nav'
import { redirect, redirectDocument } from 'react-router-dom';

export default function Contact() {
  return (
    <>
      <Nav />
      <div className="container">
        <h1>Contact Information</h1>
        <ul>
          <li>Name: Joshua Da Costa</li>
          <li>Email: Joshua.0331@hotmail.com</li>
          <li>Phone: 647-979-8407</li>
        </ul>

        <form>
          <h3>Reach out to me here: </h3>
          <label htmlFor="name">Name: </label>
          <input type="text"></input>
          <br></br>
          <br></br>
          <label htmlFor="phone">Phone Number: </label>
          <input type="text"></input>
          <br></br>
          <br></br>
          <label htmlFor="email">Email: </label>
          <input type="text"></input>
          <br></br>
          <br></br>
          <label htmlFor="message">message: </label>
          <textarea></textarea>
          <br></br>
          <br></br>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </>
  );
}
