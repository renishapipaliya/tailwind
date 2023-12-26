import React from 'react'

function News() {
  return (
    <div className="bg-[#2699fb] p-4">
      <div className="max-w[1240px] mx-auto md:flex justify-between py-[50px]">
        <div className='m-2'>
          <h1 className=" text-[20px] md:text-[40px] text-white font-bold">
            Want to learn latest I.T skills?
          </h1>
          <p className="text-white">
            Sign up to our newsletter and stay up to date.
          </p>
        </div>
        <div>
          <input
            type="text"
            className="p-3 mr-2 text-gray-800 rounded-md fn:w-full"
            placeholder="Email"
          />
          <button className="bg-black text-white w-[200px] rounded-md mb-2 font-medium my-6 mx-auto md:mx-0 p-3 cursor-pointer">
            Get Started
          </button>
          <br />
          <p className='text-white'>We care bout the protection of your data. Read our </p>
          <p className='text-black'>Privacy Policy.</p>
        </div>
      </div>
    </div>
  );
}

export default News