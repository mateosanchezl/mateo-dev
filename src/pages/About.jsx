import React from "react";
import signatureIcon from "../assets/signature-no-bg.png";
import Arrow from "../components/Arrow";
import Highlighted from "../components/Highlighted";

function About() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen mt-44 pt-36">
        <div className=" max-w-2xl order-2 mx-auto">
          <p className="text-center text-4xl text-white -mt-36">About Me</p>
          <p className="pt-10 text-center text-lwhitespace-normal text-slate-400">
            I’m currently working towards a{" "}
            <Highlighted>
              Bachelor’s Degree (Bsc) in AI & Data Science
            </Highlighted>{" "}
            at Manchester Metropolitan University. In 2019, I had the
            opportunity to work in retail at{" "}
            <Highlighted>Carhartt Work In Progress</Highlighted> in London for a
            short time. Recently, I completed an internship in the{" "}
            <Highlighted>Data Analysis and Financial Risk Analysis</Highlighted>{" "}
            departments at <Highlighted>BancoSol</Highlighted> - the world’s
            first microfinance dedicated bank based in Bolivia.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center -mt-40">
        <Arrow direction={"down"} to={"portfolio"} />
      </div>
    </>
  );
}

export default About;
