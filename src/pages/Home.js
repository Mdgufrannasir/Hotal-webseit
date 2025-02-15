import React from "react";
import Navbar from "../Component/Navbar";
import Banner from "../Component/Banner";

function Home() {
  return (
    <>
      <div className="pb-10 bg-[url('/public/ayodhya.webp')] bg-no-repeat bg-center bg-cover bg-[#00000075;] bg-blend-color">
            <div className=" ">
                <Navbar />
                <Banner />
            </div>
      </div>
    </>
  );
}
export default Home;
