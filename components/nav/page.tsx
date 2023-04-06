"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import logo from "../../public/assets/Logo/logo2.png";

const Nav = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#ffffff");
        setTextColor("#000000");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
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
        <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
          <Link href="/">
            <Image src={logo} alt="logo icon" className="w-16"></Image>
          </Link>
          <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
            <li className={"p-4 navhover"}>
              <Link className="shadow1 " href="/">
                Home
              </Link>
            </li>
            <li className={"p-4 navhover"}>
              <Link className="shadow1" href="/about">
                About
              </Link>
            </li>
            <li className={"p-4 navhover"}>
              <Link className="shadow1" href="/services">
                Services
              </Link>
            </li>
            <li className={"p-4 navhover"}>
              <Link className="shadow1" href="/gallery">
                Gallery
              </Link>
            </li>
            <li className={"p-4 navhover"}>
              <Link className="shadow1" href="/contact">
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile Button */}
          <div onClick={handleNav} className="block sm:hidden z-10">
            {nav ? (
              <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
            ) : (
              <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
            )}
          </div>
          {/* Mobile Menu */}
          <div
            className={
              nav
                ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-[#41cf34] text-center ease-in duration-300"
                : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-[#41cf34] text-center ease-in duration-300"
            }
          >
            <ul>
              <li
                onClick={handleNav}
                className="p-4 text-4xl hover:text-gray-500"
              >
                <Link href="/">Home</Link>
              </li>
              <li
                onClick={handleNav}
                className="p-4 text-4xl hover:text-gray-500"
              >
                <Link href="/#gallery">Gallery</Link>
              </li>
              <li
                onClick={handleNav}
                className="p-4 text-4xl hover:text-gray-500"
              >
                <Link href="/work">Work</Link>
              </li>
              <li
                onClick={handleNav}
                className="p-4 text-4xl hover:text-gray-500"
              >
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
