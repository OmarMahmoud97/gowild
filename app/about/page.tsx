import Image from "next/image";
import rachJack from "../../public/assets/about/rach-jack.png";
import BackgroundAnimation from "@/components/backgroundAnimation/backgroundAnimation";
function About() {
  return (
    <div className="w-screen flex items-center justify-between flex-col mt-[6rem]">
      <BackgroundAnimation />
      <h1 className="text-3xl mb-[1rem] font-bold">About us</h1>
      <div className="flex flex-col-reverse sm:flex-row items-center justify-center h-[100%] p-2">
        <div className="flex items-center justify-center flex-col lg:w-[50rem] p-4 mb-2">
          <Image
            className="w-[24rem] p-5 rounded-[2rem]"
            src={rachJack}
            alt="Picture of rachel (founder) with a lovely dog"
          ></Image>
          <p className="text-center mb-2 text-sm font-semibold">Hello there!</p>

          <p className="text-center mb-2 text-sm font-semibold">
            My name is Rachel & I'm the founder of Go Wild.
          </p>
          <p className="text-center mb-2 text-sm font-semibold">
            I've been working as a professional dog walker for over 7 years.
            Within this time my knowledge and love for dogs has grown immensely.
            I've worked with a wide range of dog breeds and sizes, from
            Chihuahuas to Bernese mountain dogs. I have experience with dogs who
            are reactive, nervous, elderly and/or disabled.
          </p>
          <p className="text-center mb-2 text-sm font-semibold">
            I have completed an extended diploma in Animal Management, I am
            insured and DBS checked.
          </p>
          <p className="text-center mb-2 text-sm font-semibold">
            I have experience working with a wide range of domestic pets
            including cats, rodents, reptiles and birds. I've previously
            volunteered for Cats Protection agency where I worked with lots of
            different cats, all with their own personalities. I also own a cat
            of my own called Millie.
          </p>
          <p className="text-center mb-2 text-sm font-semibold">
            If you are interested in any of our services or have any questions,
            please get in touch!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
