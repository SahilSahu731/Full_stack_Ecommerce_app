// import React from 'react'

import { assets } from "../assets/assets"
import NewsLetter from "../components/NewsLetter"
import Title from "../components/Title"

const Contact = () => {
  return (
    <div>

      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 ">
          <img className="w-full md:max-w-[480px] " src={assets.contact_img} alt="" />
          <div className="flex flex-col justify-center items-start gap-6 ">
            <p className="font-semibold text-xl text-gray-600 ">Our Store</p>
            <p className=" text-gray-500 ">245 street, william station <br /> new york, USA </p>
            <p className=" text-gray-500 ">+91-154-447-4589 <br /> forever.com</p>
            <p className=" text-gray-600 font-semibold text-xl ">Carriers at Forever</p>
            <p className=" text-gray-600 font-semibold text-xl "> Learn more about our team and job openings. </p>
            <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">Explore Jobs</button>
          </div>

      </div>
      <NewsLetter />
    </div>
  )
}

export default Contact