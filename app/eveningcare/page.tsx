import BackgroundAnimation from "@/components/backgroundAnimation/backgroundAnimation";
import Image from "next/image";
import pic from "@/public/assets/card-backgrounds/jackson.jpg";
import "../../components/cards/cards.css";
function EveningCare() {
  return (
    <section className="lg:h-[100vh] mt-[6rem] w-screen flex items-center justify-center flex-col p-4">
      <div className="flex items-center justify-center lg:w-[64rem] h-[70%] flex-col lg:flex-row">
        <div className="lg:w-1/2 flex items-center justify-center lg:p-0">
          <Image
            className="w-60 rounded-xl m-2 lg:m-0 lg:w-80"
            src={pic}
            alt="Solo dog walk Image"
          />
        </div>
        <div className="lg:w-1/2 flex items-center justify-between h-full flex-col">
          <div>
            <h1 className="font text-3xl font-bold w-full text-center">
              Evening Care{" "}
            </h1>
            <p className="w-full text-center">
              Price: &#163;60 &#40;Regular clients Only - Additional dogs £30
              each&#41;
            </p>
          </div>
          <p className="text-center">
            If you&#39;re heading out for the afternoon and want your dog to
            have some company, we offer evening care too. We can entertain your
            dog, take them for an evening walk and also feed them dinner. This
            way you can fully relax without worrying about your dog being left
            alone for too long.
          </p>
          <ul className="p-2">
            <li className="list-disc">
              Personalized care tailored to your pet&#39;s needs
            </li>
            <li className="list-disc">Photo updates to keep you connected</li>
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

export default EveningCare;
