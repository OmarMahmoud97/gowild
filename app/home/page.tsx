import Landing from "../../components/landing/page";
import Cards from "@/components/cards/page";
import Dog from "@/components/dog/page";

function HomePage() {
  return (
    <>
      <Landing />
      <div className="flex flex-col items-center justify-center">
        <Cards />
        <div className="sm:w-[100vw] dogcontainer flex sm:items-center sm:justify-center">
          <Dog />
        </div>
      </div>
    </>
  );
}

export default HomePage;
