import React, { useState } from "react";
import Logo from "./mainLogo.png";
import NavLinks from "./NavLinks";
import Log from "./Log"

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-[#560216] md:sticky md:top-0">
      <div className="flex items-center font-normal text-rose-50 justify-around">
        <div className="z-50 p-2 md:w-auto w-full flex justify-between">
          <img src={Logo} className="md:cursor-pointer h-12" />
          <div className="text-3xl md:hidden mt-3" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden text-sm items-center gap-2 ">
          <li>
            <a to="/" className="py-7 px-3 inline-block uppercase font-semibold">
              Home
            </a>
          </li>
          <li>
            <a to="/" className="py-7 px-3 inline-block uppercase font-semibold">
              About Us
            </a>
          </li>
          <NavLinks />
          <li>
            <a to="/" className="py-7 px-3 inline-block uppercase font-semibold">
              Marketing Solutions
            </a>
          </li>
          <li>
            <a to="/" className="py-7 px-3 inline-block uppercase font-semibold">
              Contact Us
            </a>
          </li>
        </ul>
        <div className="md:block hidden">
          <Log />
        </div>
        {/* Mobile*/}
        <ul
          className={`
            md:hidden bg-[#560217] bottom-0 absolute w-full h-full py-24 
            duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <a to="/" className="p-7 inline-block uppercase font-semibold">
              Home
            </a>
          </li>
          <li>
            <a to="/" className="p-7 inline-block uppercase font-semibold">
              About Us
            </a>
          </li>
          <NavLinks />
          <li>
            <a to="/" className="p-7 inline-block uppercase font-semibold">
              Marketing Solution
            </a>
          </li>
          <li>
            <a to="/" className="p-7 inline-block uppercase font-semibold">
              Contact Us
            </a>
          </li>
          <div className="p-5">
          <Log />
        </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
