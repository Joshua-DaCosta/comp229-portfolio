import React from 'react'
import Nav from '../components/Nav'

export default function Projects() {
  return (
    <div>
      <Nav />
      <div className="card-container">
        <div className="card">
          <img width={400} src={require("../images/ecom.png")} alt="Ecom" />
          <div>
            <h2>ECOM</h2>
            <p>
              ECOM is a ecommerse store designed to be very beautiful and catch
              the users eye all the way through
            </p>
          </div>
        </div>
        <div className="card">
          <img width={400} src={require("../images/fooders.png")} alt="FOOD" />
          <div>
            <h2>React Meals</h2>
            <p>
              React Meals is a dynamic responsive website for a resturant buisness. Its fast, easy to use and sends your order to the resturant.
            </p>
          </div>
        </div>
        <div className="card">
          <img width={400} src={require("../images/tracker.png")} alt="Track" />
          <div>
            <h2>Tracker</h2>
            <p>
              Tracker is a finance and budgetig app which makes it very easy for the user to visualiz there spending capacity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
