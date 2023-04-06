import React from "react";
import "./cards.css";
function Cards() {
  return (
    <div className="w-screen h-[150vh] sm:h-[115vh] md:h-[115vh] lg:h-[60vh] xl:h-[60vh] gradient2 flex items-center justify-center card-query">
      <main className="page-content">
        <div className="card">
          <div className="content">
            <h2 className="title shadow1">About Us</h2>
            <p className="copy">Get to know our story!</p>
            <button className="btn">More about us</button>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <h2 className="title shadow1">Services</h2>
            <p className="copy">
              We provide services for all kinds of pets! <br /> Fury, Scaley or
              even Spikey
            </p>
            <button className="btn">Services</button>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <h2 className="title shadow1">Gallery</h2>
            <p className="copy">Take a look at some of our wild friends!</p>
            <button className="btn">Gallery</button>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <h2 className="title shadow1">Contact</h2>
            <p className="copy">We would love to hear from you! </p>
            <button className="btn">Contact us</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Cards;
