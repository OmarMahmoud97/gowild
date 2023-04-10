import Image from "next/image";
import React from "react";
import lizard from "../../public/assets/lizard.gif";
function Copy() {
  return (
    <div className="flex items-center justify-between m-4 sm:mt-8 w-full flex-col-reverse ">
      <div className="flex items-center justify-start w-screen">
        <Image
          src={lizard}
          className="w-32 sm:w-64 "
          alt="cartoon lizard"
        ></Image>
      </div>
      <p className=" xl:w-1/2 sm:text-xl sm:p-4 pr-5 pl-5 text-center">
        <span className=" font-semibold text-[#41cf34]">Go Wild</span> is where
        exceptional pet care meets boundless love! Our expertise spans a
        colorful array of pets, from cuddly dogs and cats to unique reptiles and
        lively birds. At Go Wild, we treat your beloved companions like family,
        ensuring their happiness, safety, and well-being. Join our amazing
        community and experience the Go Wild difference!
      </p>
      <div className="w-60"></div>
    </div>
  );
}

export default Copy;
