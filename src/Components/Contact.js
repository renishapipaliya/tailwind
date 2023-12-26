import React from 'react'

function Contact() {
  return (
    <div className="text-black max-w-[400px] md:max-w-[600px] mx-auto pb-9">
      <form className="h-300% flex flex-col pr-1 ">
        <h1 className="text-center font-bold text-2xl">Contact</h1>
        <label className="ml-0.5">Your Name</label>
        <input type="text" className="border border-black mb-2 "></input>
        <label>Email</label>
        <input type="text" className="border border-black mb-2 "></input>
        <label>Subject</label>
        <input type="text" className="border border-black mb-3 "></input>
        <label>Mesaage</label>
        <textarea
          roes="6"
          placeholder="Types Your message here"
          className="border border-black mb-2"
        />
        <button className="bg-black text-white">Submit</button>
      </form>
    </div>
  );
}

export default Contact
