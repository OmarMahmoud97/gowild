import Image from "next/image";
import solo from "../../public/assets/serviceAssets/solo.png";
import group from "../../public/assets/serviceAssets/group.png";
import bird from "../../public/assets/serviceAssets/bird.png";
import bunny from "../../public/assets/serviceAssets/bunny .png";

Image;
function Service() {
  return (
    <section className="h-[120vh] mt-[6rem]  flex items-center justify-center flex-col">
      <h1 className="font text-3xl mb-[2rem] h-fit">Services</h1>
      <div className="flex items-center w-[64rem] justify-evenly h-4/5  flex-col ">
        <div className="flex w-full items-center justify-evenly h-2/5">
          <article className="flex items-center justify-between flex-col  w-[13rem] service h-full p-8">
            <div className="flex items-center justify-center w-full h-full hover:scale-125 flex-col serv-hover">
              <Image
                src={solo}
                alt="group dog walks"
                className="w-full"
              ></Image>
              <h2 className="text-xl text-bold font text-[#41cf34]">
                solo Walks
              </h2>
            </div>
          </article>
          <article className="flex items-center justify-between flex-col  w-[13rem] service h-full p-8">
            <div className="flex items-center justify-between w-full h-full hover:scale-125 flex-col serv-hover">
              <Image
                src={group}
                alt="solo dog walks"
                className="w-full"
              ></Image>
              <h2 className="text-xl text-bold font text-[#41cf34]">
                Group Walks
              </h2>
            </div>
          </article>
        </div>
        <div className="flex items-center justify-evenly w-full h-2/5 ">
          <article className="flex items-center justify-between flex-col  w-[13rem] service h-full p-8">
            <div className="flex items-center justify-between w-full h-full hover:scale-125 flex-col serv-hover">
              <Image
                src={bunny}
                alt="house sitting"
                className="w-full scale-[1]"
              ></Image>
              <h2 className="text-xl text-bold font text-[#41cf34]">
                House Sitting
              </h2>
            </div>
          </article>
          <article className="flex items-center justify-between flex-col w-[13rem] service h-full p-8">
            <div className="flex items-center justify-between w-full h-full hover:scale-125 flex-col serv-hover">
              <Image src={bird} alt="house visits" className="w-full"></Image>{" "}
              <h2 className="text-xl text-bold font text-[#41cf34]">
                Pet Visits
              </h2>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Service;
