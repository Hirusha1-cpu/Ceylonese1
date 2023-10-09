"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import "./slider.css";
import CountDown from "./CountDown";

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
  return (

    <div className="slider flex h-[calc(105vh-6rem)]">
    {/* image container */}
    <div className="w-full max-md:relative">
      <Image src={data[currentSlide].image} alt="" fill className="object-cover" />
      {/* Overlay text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <h1 className="text-3xl max-md:text-4xl xl:text-5xl">{data[currentSlide].title}</h1>
      </div>
    </div>
  </div>
  );
};

export default MenuSlide;
