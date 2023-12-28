import React from 'react'

function Exports() {
  return (
    <div className="max-w-[1240px] my-10 p-2 mx-auto md:grid grid-cols-3">
      <div className="col-span-1 md:w-[80%] text-center">
        <img src="/assets/laptop.jpg" className='inline' />
      </div>
      <div className=" col-span-2 flex flex-col justify-center ">
        <h1 className='text-black font-bold my-2 text-2xl'>Learn From Experts</h1>
        <p className='my-2 text-justify'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          molestiae delectus culpa hic assumenda, voluptate reprehenderit dolore
          autem cum ullam sed odit perspiciatis. Doloribus quos velit, eveniet
          ex deserunt fuga?
        </p>
        <button className="bg-black text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 cursor-pointer">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Exports
