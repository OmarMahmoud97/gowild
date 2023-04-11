import Image from "next/image";
import solo from "../../public/assets/serviceAssets/suki.jpg";
import group from "../../public/assets/serviceAssets/67a96425-faa9-43ec-a777-cdfc450a2523.png";
import bird from "../../public/assets/serviceAssets/bird.png";
import bunny from "../../public/assets/serviceAssets/bunny.png";

const cards = [
  { pic: solo, text: "Solo Walk", href: "/soloWalk", alt: "solo walks" },
  { pic: group, text: "Group Walk", href: "/groupWalk", alt: "group walks" },
  { pic: bird, text: "House Visit", href: "/houseVisit", alt: "house visits" },
  {
    pic: bunny,
    text: "House Sitting",
    href: "/houseSitting",
    alt: "house sitting",
  },
];

function Service() {
  return (
    <section className="h-[120vh] mt-[6rem] flex items-center justify-center flex-col">
      <h1 className="font text-3xl mb-[2rem] h-fit">Services</h1>
      <div className="flex items-center w-[64rem] justify-evenly h-4/5  flex-col ">
        <div className="flex w-full items-center justify-evenly h-2/5">
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
      </div>
    </section>
  );
}

export default Service;
