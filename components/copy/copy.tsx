import Image from "next/image";
import React from "react";
import lizard from "../../public/assets/lizard.gif";
function Copy() {
  return (
    <div className="flex items-center justify-between m-4 sm:mt-8 w-full flex-col ">
      <p className=" xl:w-1/2 sm:text-xl sm:p-2 pr-5 pl-5 text-center">
        Here at
        <span className=" font-semibold text-[#41cf34]"> Go Wild</span>, we
        treat your beloved companions like family, ensuring their happiness,
        safety, and well-being
      </p>
      <ul className="  sm:text-xl sm:p-2 pr-5 pl-5 text-center">
        <li className="m-2 list-disc">Barnet, North London</li>
        <li className="m-2 list-disc">Solo Walks + Group Walks</li>
        <li className="m-2 list-disc">
          Pet Sitting (Cats and other small animals)
        </li>
        <li className="m-2 list-disc">5+ Years experience</li>
        <li className="m-2 list-disc">DBS checked and insured</li>
      </ul>
      <p className=" xl:w-1/2 sm:text-xl sm:p-2 pr-5 pl-5 text-center">
        Join our amazing community and experience the Go Wild difference!
      </p>
      <div className="flex items-center justify-start w-screen">
        <Image
          src={lizard}
          className="w-32 sm:w-64 "
          alt="cartoon lizard"
        ></Image>
      </div>
      <div className="w-60"></div>
    </div>
  );
}

export default Copy;
