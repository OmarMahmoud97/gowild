import Image from "next/image";
import solo from "../../public/assets/serviceAssets/suki.jpg";
import groups from "../../public/assets/serviceAssets/group.png";
import lizard from "../../public/assets/serviceAssets/Lizard.jpg";
import cuddling from "../../public/assets/serviceAssets/cuddling.jpg";
import BackgroundAnimation from "@/components/backgroundAnimation/backgroundAnimation";

const cards = [
  { pic: solo, text: "Solo Walk", href: "/soloWalk", alt: "solo walks" },
  { pic: groups, text: "Group Walk", href: "/groupWalk", alt: "group walks" },
  {
    pic: lizard,
    text: "House Visit",
    href: "/houseVisit",
    alt: "house visits",
  },
  {
    pic: cuddling,
    text: "House Sitting",
    href: "/houseSitting",
    alt: "house sitting",
  },
];

function Service() {
  return (
    <section className="mt-[6rem] mb-[2rem] flex items-center justify-center flex-col">
      <BackgroundAnimation />
      <h1 className="font text-3xl mb-[2rem] h-fit">Services</h1>
      <div className="flex items-center sm:w-[50rem] justify-evenly h-4/5 flex-wrap ">
        {cards.map((card) => (
          <article className="flex items-center justify-center">
            <a href={card.href} className="card-wrapper">
              <div className="card-container">
                <div className="card-header">
                  <Image src={card.pic} alt={card.alt} />
                </div>
                <div className="card-footer"></div>
                <div className="card-footer-title">
                  <span className="roboto-bold">{card.text}</span>
                </div>
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Service;
