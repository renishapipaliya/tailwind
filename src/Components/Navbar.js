import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);


return (
  <div className="bg-black p-4 ">
    <div className="max-w-[1240px] py-[12px] items-center  flex justify-between  max-auto">
      <div className="text-3xl font-bold text-white">LOGO</div>
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
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Company">Company</Link>
        </li>
        <li>
          <Link to="/Resources">Resources</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Contacts">Contacts</Link>
        </li>
      </ul>
      {/* responsive menu */}
      <ul
        className={`duration-300 md:hidden w-full h-screen text-white fixed bg-black top-[92px] ${
          toggle ? "left-[0]" : "left-[-100%]"
        }`}
      >
        <li className="p-5">
          <Link to="/">Home</Link>
        </li>
        <li className="p-5">
          {" "}
          <Link to="/Company">Company</Link>
        </li>
        <li className="p-5">
          <Link to="/Resources">Resources</Link>
        </li>
        <li className="p-5">
          <Link to="/About">About</Link>
        </li>
        <li className="p-5">
          <Link to="/Contacts">Contacts</Link>
        </li>
      </ul>
    </div>
  </div>
);
      }
