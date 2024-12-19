"use client";
import Link from "next/link";
import { MdOutlineClose } from "react-icons/md";
import { useState } from "react"; // Import useState

function AccountForm({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [activeBtn, setActiveBtn] = useState("login"); // Track active button: login/register

  // Handle button clicks
  const handleButtonClick = (btnType: string) => {
    setActiveBtn(btnType);
  };

  return (
    <div
      className={`account-form fixed top-0 right-0 w-[35rem] bg-white flex flex-col gap-[2rem] justify-center h-[100%] z-[1200] p-8 text-center transition-all duration-300 ${
        isOpen ? "right-0 shadow-[0_0_0_100vw_rgba(0,0,0,0.8)]" : "right-[-105%]"
      }`}
    >
      {/* Close Button */}
      <div id="close-form" onClick={onClose} className="cursor-pointer">
        <MdOutlineClose className="absolute top-[1.5rem] right-[2.5rem] text-[4rem] text-[#444] hover:rotate-90" />
      </div>

      {/* Buttons */}
      <div className="buttons">
        <span
          onClick={() => handleButtonClick("login")}
          className={`btn inline-block mt-[1rem] py-4 px-[3rem] text-[1.8rem] border-[.1rem] border-solid border-[#0eb582] cursor-pointer mx-[.5rem] capitalize ${
            activeBtn === "login" ? "bg-[#0eb582] text-white" : "bg-[#f0fdfa] text-[#0eb582]"
          }`}
        >
          login
        </span>
        <span
          onClick={() => handleButtonClick("register")}
          className={`btn inline-block mt-[1rem] py-4 px-[3rem] text-[1.8rem] border-[.1rem] border-solid border-[#0eb582] cursor-pointer mx-[.5rem] capitalize ${
            activeBtn === "register" ? "bg-[#0eb582] text-white" : "bg-[#f0fdfa] text-[#0eb582]"
          }`}
        >
          register
        </span>
      </div>

      {/* Forms */}
      {activeBtn === "login" && (
        <form className="login-form border-[.1rem] border-solid border-[#0eb582] p-8">
          <h3 className="text-[2.5rem] text-[#444] uppercase pb-[.5rem]">login now</h3>
          <input
            type="email"
            placeholder="enter your email"
            className="box w-[100%] border-[.1rem] border-solid border-[#0eb582] px-[1.4rem] py-[1.2rem] text-[1.6rem] my-[.7rem]"
          />
          <input
            type="password"
            placeholder="enter your password"
            className="box w-[100%] border-[.1rem] border-solid border-[#0eb582] px-[1.4rem] py-[1.2rem] text-[1.6rem] my-[.7rem]"
          />
          <div className="flex py-[1rem] items-center gap-[.5rem]">
            <input type="checkbox" name="" id="remember-me" />
            <label htmlFor="remember-me" className="text-[1.5rem] text-[#777] cursor-pointer">
              remember me
            </label>
            <Link href={"/"} className="text-[1.5rem] text-[#777] ml-auto hover:underline hover:text-[#0eb582]">
              forgot password?
            </Link>
          </div>
          <input
            type="submit"
            value={"login now"}
            className="btn inline-block mt-[1rem] py-4 px-[3rem] text-[1.8rem] border-[.1rem] border-solid border-[#0eb582] bg-[#f0fdfa] text-[#0eb582] hover:bg-[#0eb582] hover:text-white cursor-pointer w-[100%] capitalize"
          />
        </form>
      )}

      {activeBtn === "register" && (
        <form className="register-form border-[.1rem] border-solid border-[#0eb582] p-8">
          <h3 className="text-[2.5rem] text-[#444] uppercase pb-[.5rem]">register now</h3>
          <input
            type="email"
            placeholder="enter your email"
            className="box w-[100%] border-[.1rem] border-solid border-[#0eb582] px-[1.4rem] py-[1.2rem] text-[1.6rem] my-[.7rem]"
          />
          <input
            type="password"
            placeholder="enter your password"
            className="box w-[100%] border-[.1rem] border-solid border-[#0eb582] px-[1.4rem] py-[1.2rem] text-[1.6rem] my-[.7rem]"
          />
          <input
            type="password"
            placeholder="confirm your password"
            className="box w-[100%] border-[.1rem] border-solid border-[#0eb582] px-[1.4rem] py-[1.2rem] text-[1.6rem] my-[.7rem]"
          />
          <input
            type="submit"
            value={"register now"}
            className="btn inline-block mt-[1rem] py-4 px-[3rem] text-[1.8rem] border-[.1rem] border-solid border-[#0eb582] bg-[#f0fdfa] text-[#0eb582] hover:bg-[#0eb582] hover:text-white cursor-pointer w-[100%] capitalize"
          />
        </form>
      )}
    </div>
  );
}

export default AccountForm;

