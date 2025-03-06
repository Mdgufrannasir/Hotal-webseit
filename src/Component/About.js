import { motion } from "framer-motion";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
const About = () => {
  return(
    <>
      <div className="flex justify-between py-5 px-16 mx-auto">
        <motion.div className="flex flex-col justify-center items-start w-1/2 p-5 gap-5" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
          <h1 className="text-2xl">About Us<span className="flex justify-center -mt-4 mb-4 pl-28"><hr className="w-10 h-[2px] bg-purple-600 border-none" /></span></h1>
          <h1 className="text-4xl md:text-5xl text-purple-600 mb-6">The Best Holidays Start Here!</h1>
          <p className="text-gray-700 leading-relaxed text-lg">
            Embark on a tranquil journey at our <span className="font-semibold">Kingsukh Guest House</span>, 
            enveloped by the scenic allure of <span className="text-purple-600 font-semibold">Biharinath Hill, Baranti Hill, 
            Susunia Hill, Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam,</span> and the captivating <span className="font-semibold">Panchat Dam</span>.
            Revel in the embrace of comfort, relish delightful meals, and unwind in our verdant garden oasis. 
            Your ideal retreat beckons, promising a harmonious blend of nature's beauty and heartfelt hospitality. 
            Explore the hidden gems of Purulia, creating memories that linger long after your stay.
          </p> 
          <div className="flex justify-center items-center gap-10">
            <button className="px-10 py-4 bg-purple-600 text-white font-bold rounded-full shadow-md hover:bg-white hover:text-purple-600 "> BOOK A STAY</button>
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-14 h-14 shadow-md bg-purple-600 rounded-full text-white hover:bg-white hover:text-purple-600">
                <FaPhoneAlt/>
              </div>
              <div>
                <p className="text-sm">Reservation</p>
                <p className="font-semibold">+91 1234567890</p>
              </div>
            </div>
          </div>       
        </motion.div>
        <motion.div className="flex flex-col justify-center items-end w-1/2 p-5" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.3 }} viewport={{ once: true }}>
          <img className="rounded-lg h-3/4 shadow-lg hover:scale-105 transition-transform duration-500" src="/out.jpg" alt="Kingsukh Guest House" />
        </motion.div>

      </div>
    </>
  )
};
export default About;


