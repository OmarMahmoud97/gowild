import BackgroundAnimation from "@/components/backgroundAnimation/backgroundAnimation";
import Image from "next/image";
import pic from "@/public/assets/card-backgrounds/jackson.jpg";
import "../../components/cards/cards.css";
function SoloWalk() {
  return (
    <section className="lg:h-[100vh] mt-[6rem] w-screen flex items-center justify-center flex-col my-2 p-4">
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
              Solo Walk
            </h1>
            <p className="w-full text-center">
              Price: &#163;30 &#40;1 Hour walk&#41;
            </p>
          </div>
          <p className="text-center">
            Treat your dog to an exclusive 1&#8210; 1 walk, tailored to their
            individual needs and preferences. Our Solo Walks are perfect for
            dogs that require extra attention or training. By using positive
            reinforcement techniques, we&#39;ll encourage good behavior while
            building a strong bond with your furry friend.
          </p>
          <ul className="p-4">
            <li className="list-disc">1-hour personalized walk</li>
            <li className="list-disc">
              Tailored to your dog&#39;s specific needs
            </li>
            <li className="list-disc">Varied walking locations</li>
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
