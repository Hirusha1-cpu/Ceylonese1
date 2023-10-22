"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import "./slider.css";

const data = [
  {
    id: 1,
    title: "",
    image: "/banner.png",
  },
  {
    id: 2,
    title: "",
    image: "/banner.png",
  },
  {
    id: 3,
    title: "",
    image: "/banner.png",
  },
];

const MenuSlide = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      4000
    );
    return () => clearInterval(interval);
  });
   // Conditionally set the style based on window.innerWidth
   
     // Conditionally set the style based on window.innerWidth
  const slideStyle = typeof window !== "undefined" && window.innerWidth < 768
  ? { width: '100%', height: '85%' }
  : {}; // Empty object if not less than 768
const slideStyle1 = typeof window !== "undefined" && window.innerWidth < 768
  ? { height: 'calc(80vh - 15rem)' }
  : { height: 'calc(100vh)' }; // Empty object if not less than 768

  return (

    <div className="slider flex" style={slideStyle1}>
    {/* image container */}
    <div className="w-full flex max-md:relative"
     style={slideStyle}
    //  style={{width: '100%', height: '85%', position: 'relative'}}
     >
      {/* <Image src={data[currentSlide].image} alt="" fill className="object-cover" /> */}
      <Image src={data[currentSlide].image} alt="" fill className="object-fill" />
      {/* Overlay text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <h1 className="text-3xl max-md:text-4xl xl:text-5xl">{data[currentSlide].title}</h1>
      </div>
    </div>
  </div>
  );
};

export default MenuSlide;