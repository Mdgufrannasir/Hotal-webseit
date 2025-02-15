import React from "react";
import { FaPhoneAlt } from 'react-icons/fa';
import SliderImage from "./SliderImage";

const Banner = () => {
  return (
    <div className="pt-20">
      <div className="px-20 py-10 gap-3 text-white flex flex-col">
        <p className="text-6xl/tight text-center"> Make Yourself At Home In<br/> Our Guest House.</p>
        <span className="flex justify-center"><hr className="w-80 h-[2px] bg-white border-none" /></span>
        <p className="text-2xl text-center">Simple - Unique - Friendly</p>
      </div>

      <div className="flex justify-center items-center gap-10">
        <button className="px-10 py-4 bg-white text-purple-600 font-bold rounded-full shadow-md hover:bg-purple-600 hover:text-white "> BOOK A STAY</button>

        <div className="flex items-center space-x-2 text-white">
          <div className="flex items-center justify-center w-14 h-14 shadow-md bg-white rounded-full text-purple-600 hover:bg-purple-600 hover:text-white">
            <FaPhoneAlt/>
          </div>
          <div>
            <p className="text-sm">Reservation</p>
            <p className="font-semibold">+91 1234567890</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-start px-16 pt-20">
        <SliderImage/>
      </div>
    </div>
  );
};
export default Banner;
