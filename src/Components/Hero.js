import React from 'react'
import Typed from "react-typed";

export default function Hero() {
  return (
    <div className="bg-[#2699fb] w-full py-[100px] ">
      <div className="max-w-[1240px] max-auto text-center font-bold mt-4 my-[100px]">
        <div className="text-xl md:text-3xl font-bold md:p-[24px]">
          Learn with us
        </div>
        <h2 className="text-white font-bold text-3xl md:text-[80px] md:p-[24px]">
          Grow with us
        </h2>
        <div className="text-[20px] md:text-[50px] text-white font-bold md:p-[24px]">
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
        <button className="bg-black text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 cursor-pointer">
          Get Started
        </button>
      </div>
    </div>
  );
}

