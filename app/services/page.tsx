import Image from "next/image";
import solo from "../../public/assets/serviceAssets/suki.jpg";
import groups from "../../public/assets/serviceAssets/group.png";
import lizard from "../../public/assets/serviceAssets/Lizard.jpg";
import cuddling from "../../public/assets/serviceAssets/cuddling.jpg";
import BackgroundAnimation from "@/components/backgroundAnimation/backgroundAnimation";
import Link from "next/link";
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
    <section className="mt-[6rem] mb-[2rem] h-[80vh] flex items-center justify-between flex-col">
      <BackgroundAnimation />
      <h1 className="font text-3xl mb-[2rem] h-fit">Services</h1>
      <div className="flex items-center sm:w-[64rem] justify-evenly h-4/5 flex-wrap ">
        {cards.map((card) => (
          <article className="flex items-center justify-center" key={card.href}>
            <Link
              href={card.href}
              className="card-wrapper relative overflow-hidden h-[400px] w-64"
            >
              <div className="card-container h-full w-full">
                <div className="card-header absolute flex items-center justify-center h-full">
                  <Image
                    src={card.pic}
                    alt={card.alt}
                    className="h-full max-w-full"
                  />
                </div>
                <div className="card-footer h-[15%] absolute bottom-0 left-0 right-0 text-center flex items-center justify-center text-white"></div>
                <div className="card-footer-title ">
                  <span className="font absolute text-white">{card.text}</span>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Service;
