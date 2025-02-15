import React from "react";
const Navbar = () => {
  return (
    <div className="flex content-center justify-between px-20 pt-10 pb-2">
      <div className="flex content-center">
        <h1 className="text-2xl text-white font-semibold">Kingsukh Guest House</h1>
      </div>
      <div className="flex gap-10 content-center text-xl text-white font-semibold">
        <a href="#home" className="hover:text-purple-600 focus:text-purple-600">
          Home
        </a>
        <a href="#about" className="hover:text-purple-600 focus:text-purple-600">
          About
        </a>
        <a href="#service" className="hover:text-purple-600 focus:text-purple-600">
          Service
        </a>
        <a href="#rooms" className="hover:text-purple-600 focus:text-purple-600">
          Rooms
        </a>
        <a href="#gallery" className="hover:text-purple-600 focus:text-purple-600">
          Gallery
        </a>
        <a href="#contact" className="hover:text-purple-600 focus:text-purple-600">
          Contact
        </a>
      </div>
      <div className="flex content-center">
        <button className="font-semibold text-xl text-white bg-purple-600 hover:text-purple-600 hover:bg-white px-4 py-2 rounded-lg">
          Book Now
        </button>
      </div>
    </div>
  );
};
export default Navbar;
