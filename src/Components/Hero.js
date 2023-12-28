import React from 'react'
import Typed from "react-typed";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="bg-black w-full py-[100px] ">
      <div className="max-w-[1240px] max-auto text-center font-bold mt-4 my-[100px]">
        <div className="text-xl md:text-3xl font-bold md:p-[24px]">
          Learn with us
        </div>
        <h2 className="text-white font-bold text-3xl md:text-[60px] md:p-[24px]">
          Grow with us
        </h2>
        <div className="text-[20px] md:text-[30px] text-white font-bold md:p-[24px]">
          Learn
          <Typed
            className="pl-3"
            strings={[
              "Web Development",
              "Digital Marketing",
              "Ethical Hacking",
            ]}
            typeSpeed={100}
            loop={true}
            backSpeed={50}
          />
        </div>
        <button className="bg-white text-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 cursor-pointer">
          <Link to="/Contacts">Contacts</Link>
        </button>
      </div>
    </div>
  );
}

