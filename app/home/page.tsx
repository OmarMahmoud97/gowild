import React from "react";
import Landing from "../../components/landing/page";
import Cards from "@/components/cards/page";
import Pawprints from "@/components/pawprints/page";
import Dog from "@/components/dog/page";

function HomePage() {
  return (
    <>
      <Landing />
      <div className="flex flex-col">
        <Cards />
        <Dog />
      </div>
    </>
  );
}

export default HomePage;
