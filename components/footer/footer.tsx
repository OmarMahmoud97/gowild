import Image from "next/image";
import Logo1 from "../../public/assets/Logo/goWildLogo.png";
import Facebook from "../../public/assets/footer/Facebook.svg";
import Instagram from "../../public/assets/footer/Instagram.svg";
import Link from "next/link";

function Footer() {
  return (
    <footer className="w-screen footer flex justify-center items-center p-2 bg-[#1d5d17]">
      <div className="w-[64rem] h-full flex items-center justify-between">
        <div>
          <Link href="/">
            <Image alt="logo - go wild" className="w-28" src={Logo1}></Image>
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <ul className="flex h-full sm:h-[6rem] items-start mr-4  justify-between flex-col">
            <Link href="/">
              <li className="text-white hover:text-black">Home</li>
            </Link>
            <Link href="/about">
              <li className="text-white hover:text-black">About us</li>
            </Link>
            <Link href="/services">
              <li className="text-white hover:text-black">Services</li>
            </Link>
            <Link href="/gallery">
              <li className="text-white hover:text-black">Gallery</li>
            </Link>
          </ul>
          <ul className="flex h-full sm:h-[6rem] items-start justify-between flex-col">
            <Link href="/contact">
              <li className="text-white hover:text-black">Contact</li>
            </Link>
            <Link href="/careers">
              <li className="text-white hover:text-black">Careers</li>
            </Link>
            <Link href="/policy">
              <li className="text-white hover:text-black">Privacy Policy</li>
            </Link>
            <Link href="/terms">
              <li className="text-white hover:text-black">
                Terms and Conditions
              </li>
            </Link>
          </ul>
        </div>

        <div className=" text-white hover:text-black flex items-center justify-end h-full">
          <div className="flex items-center justify-between flex-col h-1/2 sm:h-[6rem]">
            <div className="flex items-center justify-evenly w-1/2">
              <a
                href="https://www.facebook.com/gowild.dogwalking/?fref=mentions&paipv=0&eav=Afa4SGTnMS91DVJMaFBZdN7LC6ZL8itSucyRlEkW9FCAfBLhTF-_ohnLVPdKgz1UMAw&_rdr"
                target="_blank"
              >
                <Image
                  src={Facebook}
                  className="hover:scale-[1.2]"
                  alt="Facebook Link"
                ></Image>
              </a>
              <a
                href="https://www.instagram.com/gowild_dogwalking/"
                target="_blank"
              >
                <Image
                  src={Instagram}
                  className="hover:scale-[1.2]"
                  alt="Instagram Link"
                ></Image>
              </a>
            </div>
            <p className="text-white">&copy; Go Wild Pet Services</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
