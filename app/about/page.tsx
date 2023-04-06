import React from "react";

function About() {
  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col">
      <div className="flex items-center justify-center flex-col w-2/3">
        <p className="text-center mb-2">Hello there! </p>
        <p className="text-center mb-2">
          My name is Rachel and I am the founder of Go Wild, a pet care company.
          With over five years of experience as a professional dog walker, my
          love and knowledge of dogs have grown immensely. I have had the
          privilege of working with various breeds and sizes, including
          Chihuahuas and Bernese mountain dogs, as well as dogs with reactive,
          nervous, elderly, and/or disabled traits.
        </p>
        <p className="text-center mb-2">
          To enhance my expertise, I have completed an extended diploma in
          Animal Management, and I am insured and DBS checked for your peace of
          mind. Besides dogs, I have also worked with domestic pets such as
          cats, rodents, reptiles, and birds. I have volunteered for the Cats
          Protection agency, where I got to know different cats with their
          unique personalities. I am also a proud owner of a cat named Millie.
        </p>
        <p className="text-center mb-2">
          If you have any questions about our services, or you are interested in
          them, please don't hesitate to reach out. We would be more than happy
          to help you and your furry friend.
        </p>
      </div>
    </div>
  );
}

export default About;
