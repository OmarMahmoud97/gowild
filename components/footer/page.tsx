import Image from "next/image";
import running from "../../public/assets/footer/running.gif";
import Facebook from "../../public/assets/footer/Facebook.svg";
import Instagram from "../../public/assets/footer/Instagram.svg";
function Footer() {
  return (
    <div className="w-screen footer flex justify-center items-center bg-[#1d5d17]">
      <div className="w-[64rem] flex items-center justify-evenly">
        <div className="w-1/3">
          <Image alt="running dog" className="w-72" src={running}></Image>
        </div>
        <div className="w-1/3 flex items-center justify-center flex-col">
          <p>&copy; Go Wild Pet Services</p>
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
    </div>
  );
}

export default Footer;
