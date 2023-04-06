import Image from "next/image";
import running from "../../public/assets/footer/running.gif";
import Facebook from "../../public/assets/footer/Facebook.svg";
import Instagram from "../../public/assets/footer/Instagram.svg";
function Footer() {
  return (
    <footer className="w-screen footer flex justify-center items-center bg-[#1d5d17]">
      <div className="w-[64rem] flex items-center justify-evenly">
        <div className="w-1/3">
          <Image alt="running dog" className="w-72" src={running}></Image>
        </div>
        <div className="flex items-center justify-start"></div>
        <ul className="flex h-[6rem] items-start  justify-start flex-col">
          <a href="/">
            <li className="text-white hover:text-black">Home</li>
          </a>
          <a href="/about">
            <li className="text-white hover:text-black">About us</li>
          </a>
          <a href="/services">
            <li className="text-white hover:text-black">Services</li>
          </a>
          <a href="/gallery">
            <li className="text-white hover:text-black">Gallery</li>
          </a>
        </ul>
        <ul className="flex h-[6rem] items-start justify-start flex-col h-full">
          <a href="/contact">
            <li className="text-white hover:text-black">Contact</li>
          </a>
          <a href="/policy">
            <li className="text-white hover:text-black">Privacy Policy</li>
          </a>
          <a href="/tos">
            <li className="text-white hover:text-black">
              Terms and Conditions
            </li>
          </a>
        </ul>
        <div className="w-1/3 text-white hover:text-black flex items-center justify-center flex-col">
          <p className="mb-2">&copy; Go Wild Pet Services</p>
          <div className="flex items-center justify-evenly w-1/2">
            <a href="" target="_blank">
              <Image src={Facebook} alt="Facebook Link"></Image>
            </a>
            <a href="" target="_blank">
              <Image src={Instagram} alt="Instagram Link"></Image>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
