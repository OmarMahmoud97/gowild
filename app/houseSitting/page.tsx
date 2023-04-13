import BackgroundAnimation from "@/components/backgroundAnimation/backgroundAnimation";
import Image from "next/image";
import pic from "@/public/assets/card-backgrounds/jackson.jpg";
import "../../components/cards/cards.css";
function HouseSit() {
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
              House Sitting
            </h1>
            <p className="w-full text-center">
              Price: £55 &#40;Overnight stay - Regular clients Only&#41;
            </p>
          </div>
          <p className="text-center">
            Ensure your beloved pet receives the ultimate care and attention
            with our In-Home Overnight Stays service. Our experienced caregivers
            will stay at your home, providing a cozy and familiar environment
            for your pet while you're away. This service offers you peace of
            mind and allows your pet to maintain their usual routines. Our
            caregivers will ensure that your pet's needs are met, from feeding
            to playtime and cuddles. We'll keep you updated with regular photo
            updates, so you can be confident your pet is in good hands.
          </p>
          <ul>
            <li className="list-disc">
              Overnight care in the comfort of your own home
            </li>
            <li className="list-disc">
              Personalized care tailored to your pet's needs
            </li>
            <li className="list-disc">
              Regular photo updates to keep you connected
            </li>
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

export default HouseSit;
