import BackgroundAnimation from "@/components/backgroundAnimation/backgroundAnimation";
import Image from "next/image";
import pic from "@/public/assets/card-backgrounds/jackson.jpg";
import "../../components/cards/cards.css";
function HouseVisit() {
  return (
    <section className="my-2 lg:h-[100vh] mt-[6rem] w-screen flex items-center justify-center flex-col p-4">
      <div className="flex items-center justify-center lg:w-[64rem] lg:h-[70%] flex-col lg:flex-row">
        <div className="lg:w-1/2 flex items-center justify-center p-4 lg:p-0">
          <Image
            className="w-60 rounded-xl m-2 lg:m-0 lg:w-80 "
            src={pic}
            alt="Solo dog walk Image"
          />
        </div>
        <div className="lg:w-1/2 flex items-center justify-between h-full flex-col">
          <div className="m-2">
            <h1 className="font text-3xl font-bold w-full text-center">
              Pet Visits
            </h1>
            <p className="w-full text-center">Price:</p>

            <p className="w-full text-center">1 Visit = &#163;15</p>
            <p className="w-full text-center">2 Visits = &#163;25</p>
            <p className="w-full text-center">
              &#40;Each visit is 45&#8210;60 minutes&#41;
            </p>
          </div>
          <p className="text-center m-2">
            Going away for the weekend&#63; We offer pet visits for cats,
            rodents, reptiles and other small animals. Our 30&#8210;45 minute
            visit will consist of feeding, cleaning, cuddles or whatever your
            pet requires,
          </p>
          <ul className="p-4">
            <li className="list-disc">Regular photo updates</li>
            <li className="list-disc">Tailored to your pets specific needs</li>
            <li className="list-disc">Peace of mind for pet owners</li>
            <li className="list-disc">Plant watering available</li>
            <li className="list-disc">Experience with Diabetic cats </li>
          </ul>
          <a href="/contact">
            <button className="btn cursor-pointer mt-6 text-xs font-bold uppercase text-white bg-green-600 p-2 hover:bg-white hover:text-green-600 ">
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
