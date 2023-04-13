import BackgroundAnimation from "@/components/backgroundAnimation/backgroundAnimation";
import Image from "next/image";
import pic from "@/public/assets/card-backgrounds/jackson.jpg";
import "../../components/cards/cards.css";
function HouseVisit() {
  return (
    <section className="h-[100vh] mt-[6rem] w-screen flex items-center justify-center flex-col">
      <div className="flex items-center justify-center w-[64rem] h-[70%]]">
        <div className="w-1/2 flex items-center justify-center ">
          <Image
            className="w-80 rounded-xl"
            src={pic}
            alt="Solo dog walk Image"
          />
        </div>
        <div className="w-1/2 flex items-center justify-between h-full flex-col">
          <div>
            <h1 className="font text-3xl font-bold w-full text-center">
              House Visits
            </h1>
            <p className="w-full text-center">
              Price: &#163;15 &#40;20/30 minute visit&#41;
            </p>
          </div>
          <p className="text-center">
            Planning a little getaway? or heading out for the afternoon? We
            provide attentive pet visits for dogs, cats, rodents, reptiles, and
            other small animals. Our 20-30 minute visits include feeding,
            cleaning, cuddling, and any other specific needs your pet may have.
            With our expertise in administering medication, rest assured that
            your beloved pets are in capable hands. Plus, we'll send regular
            picture updates to keep you connected! Additional services such as
            watering plants can also be arranged.
          </p>
          <ul>
            <li className="list-disc">Regular photo updates</li>
            <li className="list-disc">Walk and dinner service</li>
            <li className="list-disc">Tailored to your pets specific needs</li>
            <li className="list-disc">Peace of mind for pet owners</li>
            <li className="list-disc">
              Additional services available upon request
            </li>
          </ul>
          <a href="/contact">
            <button className="btn  cursor-pointer mt-6 text-xs font-bold uppercase text-white bg-green-600 p-2 hover:bg-white hover:text-green-600 ">
              Contact
            </button>
          </a>
        </div>
      </div>
      <BackgroundAnimation />
    </section>
  );
}

export default HouseVisit;
