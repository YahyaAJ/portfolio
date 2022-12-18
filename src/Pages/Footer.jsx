import React from "react";
import { FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <div id="footer" className="h-1/2 w-full bg-bgSky1 text-white px-14 text-center">
      <div className=" border-t px-7 py-10 ">
        <p className="font-bold">Pondok Programmer</p>
        <p>©2022 PondokIT | Design by YahyaAJ</p>
        <p>idhamyahyaaljundi@gmail.com</p>
        <ul className="flex justify-center">
          <li className="text-3xl mt-3 mx-3">
            <a>
              <FaGithub />
            </a>
          </li>
          <li className="text-3xl mt-3 mx-3">
            <a>
              <FaInstagram />
            </a>
          </li>
          <li className="text-3xl mt-3 mx-3">
            <a>
              <FaFacebook />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
