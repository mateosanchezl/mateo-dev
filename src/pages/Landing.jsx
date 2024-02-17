import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Arrow from "../components/Arrow";

function Landing() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="flex items-center justify-center -mt-40">
        <Arrow direction={"down"} to={"about"} />
      </div>
    </>
  );
}

export default Landing;
