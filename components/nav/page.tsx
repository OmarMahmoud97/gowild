"use client";
import Image from "next/image";
import Logo from "../../public/assets/Logo/Logo3.png";
const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "About Us", href: "about", current: false },
  { name: "Services", href: "#", current: false },
  { name: "Gallery", href: "#", current: false },
  { name: "Contact", href: "#", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Nav() {
  return (
    <nav className="  sticky top-0 z-10 bg-opacity-10 bg-white backdrop-filter backdrop-blur-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Image src={Logo} alt="go wild logo" className="w-16"></Image>
          <div className="flex space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? "bg-[#41CF34] text-white m-0 ml-2  w-20 text-center mt-[4px]"
                    : "text-[#41cf34] hover:bg-[#41cf34] hover:text-white m-0 ml-2 w-26 text-center",
                  "block rounded-md px-3 py-2 text-base font-medium"
                )}
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
