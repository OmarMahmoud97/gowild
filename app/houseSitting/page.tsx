import BackgroundAnimation from "@/components/backgroundAnimation/backgroundAnimation";
import Image from "next/image";
import pic from "@/public/assets/card-backgrounds/jackson.jpg";
import "../../components/cards/cards.css";
function HouseSit() {
  return (
    <section className="sm:h-[100vh] mt-[6rem] w-screen flex items-center justify-center flex-col p-4">
      <div className="flex items-center justify-center sm:w-[64rem] h-[70%] flex-col sm:flex-row">
        <div className="sm:w-1/2 flex items-center justify-center sm:p-0">
          <Image
            className="w-60 rounded-xl m-2 sm:m-0 sm:w-80"
            src={pic}
            alt="Solo dog walk Image"
          />
        </div>
        <div className="sm:w-1/2 flex items-center justify-between h-full flex-col">
          <div>
            <h1 className="font text-3xl font-bold w-full text-center">
              House Sitting
            </h1>
            <p className="w-full text-center">
              Price: &#163;60 &#40;Regular clients Only - Additional dogs £30
              each&#41;
            </p>
          </div>
          <p className="text-center">
            Ensure your beloved pet receives the ultimate care and attention
            with our In-Home Overnight Stays service. Our experienced caregivers
            will stay at your home, providing a cozy and familiar environment
            for your pet while you&#39;re away. This service offers you peace of
            mind and allows your pet to maintain their usual routines. Our
            caregivers will ensure that your pet&#39;s needs are met, from
            feeding to playtime and cuddles. We&#39;ll keep you updated with
            regular photo updates, so you can be confident your pet is in good
            hands.
          </p>
          <ul className="p-2">
            <li className="list-disc">
              Overnight care in the comfort of your own home
            </li>
            <li className="list-disc">
              Personalized care tailored to your pet&#39;s needs
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
