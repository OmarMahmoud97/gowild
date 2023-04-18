"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import logo from "../../public/assets/Logo/logo2.png";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About" },
  { href: "/services", text: "Services" },
  { href: "/gallery", text: "Gallery" },
  { href: "/contact", text: "Contact" },
];

const Nav = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");
  const path = usePathname();
  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#ffffff");
        setTextColor("#41cf34");
      } else {
        setColor("transparent");
        setTextColor("#41cf34");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <nav
      style={{ backgroundColor: `${color}` }}
      className="fixed flex left-0 top-0 w-full z-10 ease-in duration-300 items-center justify-center backdrop-filter backdrop-blur-md bg-opacity-0 "
    >
      <div className="w-[64rem]">
        <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 ">
          <Link href="/">
            <Image src={logo} alt="logo icon" className="w-16"></Image>
          </Link>
          <ul style={{ color: `${textColor}` }} className="hidden lg:flex">
            {links.map((link) => (
              <li
                className={`${
                  link.href === path
                    ? " text-[#ffffff] bg-[#1f6419] shadow1 p-4 m-1 font rounded-[1rem]"
                    : "shadow1 p-4 m-1 navhover font text-[#41cf34]"
                }`}
                key={link.href}
              >
                <Link href={link.href}>
                  <p>{link.text}</p>
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Button  */}
          <div onClick={handleNav} className="block lg:hidden z-10">
            {nav ? (
              <AiOutlineClose size={20} style={{ color: "white" }} />
            ) : (
              <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
            )}
          </div>
          <div
            className={
              nav
                ? "lg:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-[#41cf34] text-center ease-in duration-300"
                : "lg:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-[#41cf34] text-center ease-in duration-300"
            }
          >
            <ul>
              {links.map((link) => (
                <li
                  className="p-4 text-4xl hover:text-gray-500"
                  key={link.href}
                  onClick={handleNav}
                >
                  <Link href={link.href}> {link.text}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
