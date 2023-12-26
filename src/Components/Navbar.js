import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);


return (
  <div className="bg-[#2699fb] p-4 ">
    <div className="max-w-[1240px] py-[12px] items-center  flex justify-between  max-auto">
      <div className="text-3xl font-bold">LOGO</div>
      {toggle ? (
        <IoMdClose
          onClick={() => setToggle(!toggle)}
          className="text-white text-2xl md:hidden block cursor-pointer"
        />
      ) : (
        <AiOutlineMenu
          onClick={() => setToggle(!toggle)}
          className="text-white text-2xl md:hidden block cursor-pointer"
        />
      )}

      <ul className="hidden md:flex text-white gap-10 cursor-pointer">
        <li>Home</li>
        <li>Company</li>
        <li>Resources</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      {/* responsive menu */}
      <ul
        className={`duration-300 md:hidden w-full h-screen text-white fixed bg-black top-[92px] ${
          toggle ? "left-[0]" : "left-[-100%]"
        }`}
      >
        <li className="p-5">Home
        </li>
        <li className="p-5">Company</li>
        <li className="p-5">Resources</li>
        <li className="p-5">About</li>
        <li className="p-5">Contact</li>
      </ul>
    </div>
  </div>
);
      }
