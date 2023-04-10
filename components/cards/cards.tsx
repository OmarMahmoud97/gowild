import React from "react";
import Link from "next/link";
import "./cards.css";
function Cards() {
  return (
    <div className="w-screen flex items-center justify-center card-query">
      <main className="page-content grid p-4 max-w-screen-lg">
        <div className="card relative flex items-end overflow-hidden p-4 w-full text-center rounded-lg">
          <div className="content relative flex flex-col items-center w-full p-4 mt-4">
            <h2 className="title text-xl font-bold shadow1">About Us</h2>
            <p className="copy">Get to know our story!</p>
            <Link href="/about">
              <button className="btn cursor-pointer mt-6 text-xs font-bold uppercase text-white bg-green-600">
                More about us
              </button>
            </Link>
          </div>
        </div>
        <div className="card relative flex items-end overflow-hidden p-4 w-full text-center rounded-lg ">
          <div className="content relative flex flex-col items-center w-full p-4 mt-4">
            <h2 className="title text-xl font-bold shadow1">Services</h2>
            <p className="copy">
              We provide services for all kinds of pets! <br /> Fury, Scaley or
              even Spikey
            </p>
            <Link href="/services">
              <button className="btn cursor-pointer mt-6 text-xs font-bold uppercase text-white bg-green-600">
                Services
              </button>
            </Link>
          </div>
        </div>
        <div className="card relative flex items-end overflow-hidden p-4 w-full text-center rounded-lg">
          <div className="content relative flex flex-col items-center w-full p-4 mt-4">
            <h2 className="title text-xl font-bold shadow1">Gallery</h2>
            <p className="copy">Take a look at our wild family!</p>

            <Link href="/about">
              <button className="btn cursor-pointer mt-6 text-xs font-bold uppercase text-white bg-green-600">
                Gallery
              </button>
            </Link>
          </div>
        </div>
        <div className="card relative flex items-end overflow-hidden p-4 w-full text-center rounded-lg">
          <div className="content relative flex flex-col items-center w-full p-4 mt-4">
            <h2 className="title text-xl font-bold shadow1">Contact</h2>
            <p className="copy">We would love to hear from you! </p>
            <Link href="/contact">
              <button className="btn cursor-pointer mt-6 text-xs font-bold uppercase text-white bg-green-600">
                Contact us
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Cards;
