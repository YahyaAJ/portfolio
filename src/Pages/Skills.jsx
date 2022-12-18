import React from "react";
import Skill from "./TechAndTool";

function Skills() {
  return (
    <div
      id="skills"
      className="min-h-screen font-body opacity-100 p-20 text-white text-center"
    >
      <h1 className="text-5xl mb-10">SKILLS</h1>
      <div className="glow relative bg-bgSky1 grid grid-cols-4 gap- py-10">
        {Skill.map((data) => {
          return (
            <div className="flex justify-center items-center flex-col">
              <div className="h-40 flex items-center">
                <img src={data.image} className="w-40" />
              </div>
              <p className="mt-4">{data.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
