import React from 'react'
import Nav from '../components/Nav'

export default function Services() {
  return (
    <div>
      <Nav />
      <div className="services-container">
        <h1>Services</h1>
        <ul>
          <li>Web Sites</li>
          <li>Web Apps</li>
          <li>Mobile Apps</li>
          <li>Desktop Apps</li>
          <li>Database Servers</li>
        </ul>
      </div>
    </div>
  );
}
