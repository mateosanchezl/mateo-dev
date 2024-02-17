import React from "react";

function Hero() {
  return (
    <>
      <div id="hero" className="flex justify-start items-center h-screen pt-24">
        <div className="mx-auto w-2/3">
          <p className="text-center lg:text-left text-4xl text-white">
            Mateo Sanchez Lopez
          </p>
          <p className="pt-3 text-left text-m max-w-80 whitespace-normal text-slate-400">
            Bolivian-born, raised in Dubai and London, currently based in
            Manchester. Deeply immersed in the world of{" "}
            <span className="text-white">deep learning.</span> Striving to blend{" "}
            <span className="text-white">cutting-edge technology</span> with{" "}
            <span className="text-white">innovative solutions.</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Hero;
