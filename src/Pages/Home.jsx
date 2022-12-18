import React, { useEffect } from "react";
import forest from "../assets/forest.png";

function Home() {
  function stars() {
    let count = 200;
    let scene = document.querySelector("#home");
    let i = 0;
    while (i < count) {
      let star = document.createElement("i");
      let x = Math.floor(Math.random() * window.innerWidth);
      let y = Math.floor(Math.random() * window.innerHeight);
      let duration = Math.random() * 10;
      let size = Math.random() * 2;

      star.style.left = x + "px";
      star.style.top = y + "px";
      star.style.width = 1 + size + "px";
      star.style.height = 1 + size + "px";
      star.style.animationDuration = 5 + duration + "s";
      star.style.animationDelay = duration + "s";

      scene.appendChild(star);
      i++;
    }
  }

  useEffect(() => {
    stars();
  },[]);
  return (
    <div id="home" className="font-caveat min-h-screen">
      <div className="relative min-h-screen text-white bg-gradient-to-b from-bgSky1 to-bgSky2 overflow-hidden bg-fixed">
        <div className="absolute top-28 sm:top-40 right-10 sm:right-60 w-28 h-28 bg-white rounded-full z-50 after:absolute after:-top-4 after:-left-5 after:rounded-full after:bg-gradient-to-b from-bgSky1 to-bgSky2  after:w-full after:h-full after:bg-fixed" />
        <img
          src={forest}
          className="absolute left-0 bottom-40 z-50 scale-150 sm:scale-110"
        />
        <p className="text-5xl z-50 absolute sm:text-7xl top-[250px] sm:top-40 left-[25px] sm:left-20">
          Hello,
          <br />
          <span>I'm Yahya Aljundi</span>
        </p>
        <p className="absolute z-50 text-4xl top-[350px] sm:top-80 left-[25px] sm:left-20">
          A front-end developer
        </p>
        <div className="absolute z-40 bg-black h-40 w-full bottom-0"></div>
      </div>
    </div>
  );
}

export default Home;
