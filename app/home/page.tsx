import Landing from "../../components/landing/landing";
import Cards from "@/components/cards/cards";
import Copy from "@/components/copy/copy";
import Dog from "@/components/dog/dog";

function HomePage() {
  return (
    <>
      <Landing />
      <div className="flex w-screen flex-col items-center justify-center">
        <Copy />
        <Cards />
        <div className="sm:w-[100vw] dogcontainer flex sm:items-center sm:justify-center">
          <Dog />
        </div>
      </div>
    </>
  );
}

export default HomePage;
