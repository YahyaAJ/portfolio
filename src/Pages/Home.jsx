import React from "react";
import forest from "../assets/forest.png";

function Home() {
  return (
    <div className="font-caveat">
      <div className="relative min-h-screen text-white bg-gradient-to-b from-bgSky1 to-bgSky2 overflow-hidden bg-fixed">
        <div className="absolute top-40 right-60 w-28 h-28 bg-white rounded-full z-50 after:absolute after:-top-4 after:-left-5 after:rounded-full after:bg-gradient-to-b from-bgSky1 to-bgSky2  after:w-full after:h-full after:bg-fixed" />
        <img
          src={forest}
          className="absolute w-full left-0 bottom-0 z-50 scale-110"
        />
        <p className="absolute text-6xl top-40 left-20">
          Hello,
          <br />
          I'm Yahya ALjundi
        </p>
        <p className="absolute text-4xl top-72 left-20">
        A front-end developer
        </p>
      </div>
    </div>
  );
}

export default Home;
