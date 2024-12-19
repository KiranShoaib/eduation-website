"use client";
import Link from "next/link";
import { FaLightbulb } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { RiMenuLine } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";
import AccountForm from "@/components/Account-Form";

function Header() {
  // State to toggle the navbar menu
  const [isMenuActive, setIsMenuActive] = useState(false);

  // State to toggle the account form
  const [isAccountFormActive, setIsAccountFormActive] = useState(false);

  // Function to toggle the navbar
  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  // Function to toggle the account form
  const toggleAccountForm = () => {
    setIsAccountFormActive(!isAccountFormActive);
  };

  return (
    <>
      <header className="header sticky top-0 right-0 left-0 bg-white shadow-md px-[10%] py-8 flex items-center z-[1000] lg:px-[5%] md:p-8">
        {/* Logo */}
        <Link
          href={"/"}
          className="logo flex items-center text-[2.5rem] mr-auto font-bold"
        >
          <FaLightbulb className="text-[#0eb582]" />
          <span className="capitalize text-[#444]">educa</span>
        </Link>

        {/* Navbar */}
        <nav
          className={`navbar fixed md:relative top-0 md:top-auto ${
            isMenuActive ? "right-0" : "right-[-105%]"
          } md:right-auto w-[30rem] md:w-auto bg-white h-[100%] md:h-auto flex flex-col md:flex-row justify-center transition-all duration-300 ease-in-out z-[1200]`}
        >
          {/* Close Button for Mobile Navbar */}
          <div
            onClick={toggleMenu}
            className="absolute top-[1.5rem] right-8 cursor-pointer text-[4rem] text-[#444] transform hover:rotate-90 block md:hidden"
          >
            <MdOutlineClose />
          </div>

          <Link
            href={"/"}
            className="mr-[2rem] md:text-[2rem] capitalize text-[#444] hover:text-[#0eb582] block my-[1rem] md:my-0 text-center text-[3rem]"
          >
            Home
          </Link>
          <Link
            href={"/about"}
            className="mr-[2rem] md:text-[2rem] capitalize text-[#444] hover:text-[#0eb582] block my-[1rem] md:my-0 text-center text-[3rem]"
          >
            About
          </Link>
          <Link
            href={"/courses"}
            className="mr-[2rem] md:text-[2rem] capitalize text-[#444] hover:text-[#0eb582] block my-[1rem] md:my-0 text-center text-[3rem]"
          >
            Courses
          </Link>
          <Link
            href={"/contact"}
            className="mr-[2rem] md:text-[2rem] capitalize text-[#444] hover:text-[#0eb582] block my-[1rem] md:my-0 text-center text-[3rem]"
          >
            Contact
          </Link>
        </nav>

        {/* Icons */}
        <div className="icons flex">
          {/* User Icon */}
          <div
            id="account-btn"
            className="cursor-pointer text-[2.5rem] text-[#444] hover:text-[#0eb582] ml-[1.5rem]"
            onClick={toggleAccountForm} // Toggle Account Form
          >
            <FaUser />
          </div>

          {/* Hamburger Menu */}
          <div
            id="menu-btn"
            className="cursor-pointer text-[2.5rem] text-[#444] hover:text-[#0eb582] ml-[1.5rem] md:hidden inline-block"
            onClick={toggleMenu} // Toggle Menu
          >
            <RiMenuLine />
          </div>
        </div>

        {/* Overlay when menu is active */}
        {isMenuActive && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-[900]"
            onClick={toggleMenu} // Close menu when overlay is clicked
          ></div>
        )}
      </header>

      {/* Account Form Component */}
      {isAccountFormActive && (
        <div className="fixed top-0 left-0 w-full h-full z-[1100]">
          <AccountForm 
          isOpen={isAccountFormActive} 
          onClose={toggleAccountForm} />
          <div
            className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-[1000]"
            onClick={toggleAccountForm} // Close form when clicking on overlay
          ></div>
        </div>
      )}
    </>
  );
}

export default Header;
