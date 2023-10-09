"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import "./slider.css";


const data = [
  {
    id: 1,
    title: "always fresh and always crispy and always hot",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "always fresh and always crispy and always hot",
    image: "/slide2.png",
  },
  {
    id: 3,
    title: "always fresh and always crispy and always hot",
    image: "/slide3.jpg",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
  
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      4000
    );
    return () => clearInterval(interval);
  });
  return (

    <div className="slider flex h-[calc(100vh-6rem)]">
   
      <div className="w-full max-md:relative">
      <div
          className="slide-wrapper" // Apply the slide-wrapper class here
          // style={{
          //   transform: `translateX(-${currentSlide * 100}%)`, // Slide based on the currentSlide
          // }}
        >

        <Image
          src={data[currentSlide].image}
          alt=""
          fill
          className="object-cover"
        />
       
        <div className="absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <h1 className="text-3xl max-md:text-4xl xl:text-5xl">
            {data[currentSlide].title}
          </h1>
          
        </div>
  
        </div>
      </div>
    </div>
  );
};

export default Slider;
