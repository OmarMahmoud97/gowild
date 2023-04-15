import BackgroundAnimation from "@/components/backgroundAnimation/backgroundAnimation";
import Image from "next/image";
import pic from "@/public/assets/card-backgrounds/jackson.jpg";
import "../../components/cards/cards.css";
function SoloWalk() {
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
              One-on-One Walk
            </h1>
            <p className="w-full text-center">
              Price: &#163;30 &#40;2 hours, including travel time&#41;
            </p>
          </div>
          <p className="text-center">
            Treat your dog to an exclusive one-on-one walk, including a 1-hour
            walk tailored to their individual needs and preferences. Our Solo
            Walks are perfect for dogs that require extra attention or training.
            By using positive reinforcement techniques, we&#39;ll encourage good
            behavior while building a strong bond with your furry friend.
          </p>
          <ul>
            <li className="list-disc">
              2-hour total service time &#40;including pick-up, travel, and
              drop-off&#41;
            </li>
            <li className="list-disc">1-hour personalized walk</li>
            <li className="list-disc">
              Tailored to your dog&#39;s specific needs
            </li>
            <li className="list-disc">
              Varied walking locations to keep dogs engaged
            </li>
            <li className="list-disc">
              Great option for anxious or reactive dogs
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

export default SoloWalk;
