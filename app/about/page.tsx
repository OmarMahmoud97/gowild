import Image from "next/image";
import rachJack from "../../public/assets/about/rach-jack.png";
function About() {
  return (
    <div className="w-screen min-h-[70vh] flex items-center justify-center flex-col mt-[6rem]">
      <h1 className="text-3xl mb-[1rem] font-bold">About us</h1>
      <div className="flex flex-col-reverse sm:flex-row items-center justify-center sm:w-[70rem]">
        <div className="flex items-center justify-center flex-col sm:w-1/2 sm:mr-6 p-4">
          <p className="text-center mb-2">Hello there!</p>
          <p className="text-center mb-2">
            My name is Rachel and I am the founder of Go Wild, a company that
            prides itself in the care of animals. With over seven years of
            experience working with a variety animals, my love and knowledge for
            all animals has grown immensely.
          </p>
          <p className="text-center mb-2">
            I have had the privilege of working with various breeds and sizes,
            including Chihuahuas and Bernese mountain dogs, as well as dogs with
            reactive, nervous, elderly, and/or disabled traits.
          </p>
          <p className="text-center mb-2">
            To enhance my expertise, I have completed an extended diploma in
            Animal Management, and I am insured and DBS checked for your peace
            of mind. Besides dogs, I have worked with domestic pets such as
            cats, rodents, reptiles, and birds. I have volunteered for the Cats
            Protection agency, where I got to know different cats with their
            unique personalities. I am also a proud owner of a cat named Millie.
          </p>
          <p className="text-center mb-2">
            If you have any questions about our services, or you are interested
            in them, please don't hesitate to reach out. We would be more than
            happy to help you and your furry, scaley or even spikey friend!
          </p>
        </div>

        <Image
          className="w-[24rem] p-5 radius"
          src={rachJack}
          alt="Picture of rachel (founder) with a lovely dog"
        ></Image>
      </div>
    </div>
  );
}

export default About;
