import React from "react";
import Image from "next/image";
import LandingBg from "../../public/assets/backgrounds/pixarbg.png";
function Landing() {
  return (
    <section className="flex items-center justify-center w-screen flex-col relative">
      <Image
        alt="go wild dog walking & pet sitting services - landing background of dog walker walking through the wilderness with dogs"
        src={LandingBg}
        className="h-screen w-screen object-cover"
      />
      <div className="flex absolute w-full flex-col">
        <div className="flex justify-center items-center">
          <div className="w-1/3 flex justify-center items-start flex-col w-[64rem]">
            <h1 className="text-white text-7xl  shadorange shadow2 font pb-1">
              Go Wild
            </h1>
            <h2 className="text-white text-2xl font shadow1  gowild">
              Dog Walking &
            </h2>
            <h2 className="text-white text-2xl font shadow1  gowild ">
              Pet Sitting Services
            </h2>
          </div>
        </div>
        <div className="w-screen emptyrow"></div>
      </div>
      {/* <nav className="absolute w-full flex items-center justify-evenly bottom-3 nav-height">
        <div className="w-1/4 flex items-center justify-center">
          <a className="text-[#F2D544] gradient hover" href="About">
            Home
          </a>
        </div>
        <div className="w-1/4 flex items-center justify-center text-center">
          <a className="text-[#F2D544] gradient hover" href="About">
            About Us
          </a>
        </div>
        <div className="w-1/4 flex items-center justify-center">
          <a className="text-[#F2D544] gradient hover" href="About">
            Gallery
          </a>
        </div>
        <div className="w-1/4 flex items-center justify-center">
          <a className="text-[#F2D544] gradient hover" href="About">
            Contact
          </a>
        </div>
      </nav> */}
    </section>
  );
}

export default Landing;
