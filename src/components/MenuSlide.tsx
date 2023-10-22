"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import "./slider.css";
import CountDown from "./CountDown";

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
  return (

    <div className="slider flex h-[calc(80vh-15rem)]" >
    {/* image container */}
    <div className="w-full flex max-md:relative" style={{width: '100%', height: '80%', position: 'relative'}}>
      {/* <Image src={data[currentSlide].image} alt="" fill className="object-cover" /> */}
      <Image src={data[currentSlide].image} alt="" fill className="object-fill " />
      {/* Overlay text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <h1 className="text-3xl max-md:text-4xl xl:text-5xl">{data[currentSlide].title}</h1>
      </div>
    </div>
  </div>
  );
};

export default MenuSlide;