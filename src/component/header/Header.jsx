import React, { useEffect } from "react";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Home from "../home/Home";
const Header = () => {
  const randomImage = () => {
    let back = document.querySelector(".header img");
    let img = ["1.webp", "2.webp", "3.webp", "4.webp", "5.webp", "6.webp"];
    setInterval(() => {
      let randomNumber = Math.floor(Math.random() * img.length);
      back.src = img[randomNumber];
    }, 5000);
  };
  useEffect(() => {
    randomImage();
  }, []);

  return (
    <div className="control">
      <Home  />
      <About />
    </div>
  );
};

export default Header;
