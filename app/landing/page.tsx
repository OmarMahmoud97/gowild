import React from "react";
import Image from "next/image";
import LandingBg from "../../public/assets/backgrounds/Landing.png";
function Landing() {
  return (
    <section className="flex items-center justify-center">
      <Image
        alt="landing background of dog walker walking through the wilderness with dogs"
        src={LandingBg}
      />
    </section>
  );
}

export default Landing;
