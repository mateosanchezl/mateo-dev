import React from "react";
import signatureIcon from "../assets/signature-no-bg.png";
import Arrow from "../components/Arrow";

function About() {
  return (
    <>
      <div
        id="about"
        className="flex flex-col justify-center items-center h-screen"
      >
        <div className="order-2 mx-auto">
          <p className="text-center text-4xl text-white">About Me</p>
          <p className="pt-4 text-center text-l max-w-60 whitespace-normal text-slate-400">
            Currently, I’m working towards a Bachelor’s Degree (Bsc) in AI &
            Data Science at Manchester Metropolitan University. In 2019, I had
            the opportunity to work in retail at Carhartt Work In Progress for a
            short time. Recently, I completed an internship in Data Analysis at
            BancoSol - the world’s first microfinance dedicated bank based in
            Bolivia.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
