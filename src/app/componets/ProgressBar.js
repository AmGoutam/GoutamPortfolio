"use client"
import React, { useEffect, useState } from "react";

const ProgressBar = () => {
  const [width, setWidth] = useState(0);
  
  const fillscrollline = () => {
    const windowHeight = window.innerHeight;
    const fullHeight = document.body.clientHeight;
    const scrolled = window.scrollY;
    const percentScrolled = (scrolled / (fullHeight - windowHeight)) * 100;
    // console.log(percentScrolled);
    // scrollline.style.width = percentScrolled + "%";
    setWidth(percentScrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", fillscrollline);
  }, [width])

  return <div className="scroll-line" style={{ width: `${width}%` }}></div>;
};

export default ProgressBar;
