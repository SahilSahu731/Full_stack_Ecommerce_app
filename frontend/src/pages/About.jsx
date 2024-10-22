// import React from 'react'

import { assets } from "../assets/assets"
import NewsLetter from "../components/NewsLetter"
import Title from "../components/Title"

const About = () => {
  return (
    <div>

      <div className="text-2xl text-center pt-8 border-t ">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16 ">
          <img src={assets.about_img} className=" w-full max-w-[450px] " alt="" />
          <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 ">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores accusantium quo perferendis, a eos perspiciatis expedita consequatur iste aspernatur? Ipsum dicta expedita nostrum nesciunt exercitationem, voluptates, excepturi corrupti laboriosam iure, deserunt qui. Asperiores nostrum incidunt rerum sequi ducimus, possimus modi.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia debitis sunt nulla doloribus, asperiores quisquam, doloremque at numquam eum minus cupiditate odio praesentium. Similique quaerat saepe adipisci laudantium nulla maiores mollitia provident, maxime neque iusto.</p>
            <b className="text-gray-800">Our Mission</b>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim consectetur assumenda magnam, veritatis asperiores ipsam adipisci harum. Numquam tempora nobis sint voluptatum doloribus illo voluptatibus.</p>
          </div>
      </div>

      <div className="text-xl py-4">
          <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance: </b>
          <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quia impedit iure, incidunt reprehenderit porro!</p>
          </div>
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convinience :  </b>
          <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quia impedit iure, incidunt reprehenderit porro!</p>
          </div>
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service :  </b>
          <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quia impedit iure, incidunt reprehenderit porro!</p>
          </div>
      </div>
      <NewsLetter />
    </div>
  )
}

export default About
