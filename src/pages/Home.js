import React from "react";
import Navbar from "../Component/Navbar";
import Banner from "../Component/Banner";
import About from "../Component/About";

function Home() {
  return (
    <>
      <div style={{ fontFamily: "'Poppins', sans-serif" }}>
        <div className="pb-10 bg-[url('/public/ayodhya.webp')] bg-no-repeat bg-center bg-cover bg-[#00000075;] bg-blend-color">
            <Navbar />
            <Banner />
          </div>
          <About/>
      </div>
    </>
  );
}
export default Home;
