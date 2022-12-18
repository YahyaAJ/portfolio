import React from "react";
import Journey from "./Journey";

export default function About() {
  return (
    <div id="about">
      <div className="bg-black px-[25px] sm:px-20 pt-40 pb-20 text-white">
        <h1 className="font-body text-4xl sm:text-5xl">ABOUT ME</h1>
        <br />
        <p className="text-xl font-mono sm:text-justify sm:w-4/5">
          Hello, I'm Idham Yahya Aljundi also known as Yahya. 19 year old
          frontend developer from Indonesia, getting creative with React js.
          Currently learning Javascript and React Js, very excited to learn new
          things
        </p>
        <div className="grid grid-cols-2 sm:grid sm:grid-cols-3">
          {Journey.map((data,index) => {
            return (
              <div key={index} className=" w-full">
                <p className="font-body text-2xl mt-10">{data.year}</p>
                <br/>
                <p className="font-body">{data.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className=" h-36 bg-gradient-to-b from-black  to-bgSky1 "></div>
    </div>
  );
}
