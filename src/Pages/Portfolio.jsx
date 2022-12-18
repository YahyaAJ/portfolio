import React from "react";
import Project from "./Project";
import { FaGithub } from "react-icons/fa";

function Portfolio() {
  return (
    <div
      id="portfolio"
      className="min-h-screen flex flex-col m-auto font-body text-center items-center justify-center bg-bgSky1 p-20 text-white"
    >
      <h1 className="text-5xl">PORTFOLIO</h1>
      <div className=" grid grid-cols-3 gap-7 mt-10">
        {Project.map((data, index) => {
          return (
            <div
              key={index}
              className="relative w-96 h-56 flex flex-col justify-center items-center m-px  "
            >
              <div className="relative top-0 left-0 w-full bg-white  ">
                <img
                  src={data.image}
                  className="w-full aspect-auto object-cover object-center block"
                />
                <a href={data.linksite} target="_blank">
                  <div className="absolute text-white inset-0 -left-1 flex justify-center items-end ease-in-out opacity-0 hover:opacity-100 hover:-rotate-3 duration-1000">
                    <p className="text-xl min-h-fit w-full bg-black/[.7] py-2 mb-10 ">
                      {data.desc}
                      <span className="font-arabic">{data.descQuran}</span>
                    </p>
                  </div>
                </a>
                <a href={data.linkgithub} target="_blank">
                  <div className="absolute top-4 px-2 py-1 z-50 justify-center flex items-center bg-black/[.7] opacity-50  hover:opacity-100 duration-500">
                    <FaGithub className="mr-1" />
                   Github
                  </div>
                </a>
              </div>
              <div className="text-xl mt-4">
                <h1>{data.title}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Portfolio;
