import React from 'react'

export default function Plans() {
  return (
    <div className="py-[100px] px-2">
      <div className="max-w-[1240px] mx-auto md:grid grid-cols-3 gap-6">
        <div className="shadow-2xl h-[500px] my-2 hover:scale-105 duration-500">
          <img src="/assets/single.png" className="h-[20%] w-[30%] mx-auto" />
          <h1 className="text-2xl font-bold py-8 text-center">
            Web development
          </h1>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className=" py-2 border-b mx-8 mt-8">Lorem Ipsum is simply</p>
            <p className="py-2 border-b mx-8">
              Lorem Ipsum is simply dummy text of the printing
            </p>
            <p className="py-2 border-b mx-8"> Lorem Ipsum is simply dumm.</p>
          </div>
          <div className="text-center">
            <button className="bg-black text-white w-[100px] md:w-[150px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 cursor-pointer">
              Start Trial
            </button>
          </div>
        </div>
        <div className="shadow-2xl  h-[500px] my-2 bg-gray-100 hover:scale-105 duration-500">
          <img
            src="/assets/double (1).png"
            className="h-[20%] w-[30%] mx-auto"
          />
          <h1 className="text-2xl font-bold py-8 text-center">
            Digital Marketing
          </h1>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className=" py-2 border-b mx-8 mt-8">Lorem Ipsum is simply</p>
            <p className="py-2 border-b mx-8">
              Lorem Ipsum is simply dummy text of the printing
            </p>
            <p className="py-2 border-b mx-8">Lorem Ipsum is simply dumm.</p>
          </div>
          <div className="text-center">
            <button className="bg-black text-white w-[100px] md:w-[150px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 cursor-pointer">
              Start Trial
            </button>
          </div>
        </div>
        <div className="shadow-2xl  h-[500px] my-2 hover:scale-105 duration-500">
          <img src="/assets/triple.png" className="h-[20%] w-[30%] mx-auto" />
          <h1 className="text-2xl font-bold py-8 text-center">
            App development
          </h1>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className=" py-2 border-b mx-8 mt-8">Lorem Ipsum is simply</p>
            <p className="py-2 border-b mx-8">
              Lorem Ipsum is simply dummy text of the printing
            </p>
            <p className="py-2 border-b mx-8">Lorem Ipsum is simply dumm.</p>
          </div>
          <div className="text-center">
            <button className="bg-black text-white w-[100px] md:w-[150px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 cursor-pointer">
              Start Trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
