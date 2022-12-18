import React from "react";

function Navbar() {
  return (
    <div className="absolute z-50 flex justify-between items-center bg-blak/[0.5] text-white font-title px-[25px] sm:px-20 py-7 w-full">
      <div className="text-3xl sm:text-4xl">Zoen-dev</div>
      <div>
        <ul className=" hidden sm:flex item-center">
          <li className="mx-5 text-2xl relative before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-0.5 before:w-full before:bg-gradient-to-r from-bgSky2 to-sky-300 before:scale-x-0 origin-right before:hover:scale-x-100 before:hover:origin-left before:hover:transition-transform before:hover:duration-500">
            <a href="#about">About</a>
          </li>
          <li className="mx-5 text-2xl relative before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-0.5 before:w-full before:bg-gradient-to-r from-bgSky2 to-sky-300 before:scale-x-0 origin-right before:hover:scale-x-100 before:hover:origin-left before:hover:transition-transform before:hover:duration-500">
            <a href="#skills">Skills</a>
          </li>
          <li className="mx-5 text-2xl relative before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-0.5 before:w-full before:bg-gradient-to-r from-bgSky2 to-sky-300 before:scale-x-0 origin-right before:hover:scale-x-100 before:hover:origin-left before:hover:transition-transform before:hover:duration-500">
            <a href="#portfolio">Projects</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
