"use client";
import { featuredProducts } from "@/data";
import Image from "next/image";
import React, { useState } from "react";


const Dishes = () => {
  


  return (
    <div className="mt-10 mb-10">

      {/* header */}
      <div className="uppercase text-2xl flex items-center justify-center font-bold">
        Our dishes
      </div>

      <div className="w-screen overflow-x-scroll overflow-y-hidden text-black">

        {/* single item */}
        <div className="w-max flex items-center justify-center">
         
          {/* container */}
     
          {featuredProducts.map((item) => (
            <div
              key={item.id}
              className="w-screen relative h-[40vh] flex flex-col items-center  justify-around p-1 hover:bg-fuchsia-50 transition-all duration-300 sm:w-[25vw] md:w-[25vw] lg:w-[25vw] xl:w-[25vw] xl:h-[35vh] 2xl:w-[20vw]"
            >
              {/* image container */}
              {item.img && (
                <div className="relative flex-1 w-full hover:rotate-[60deg]  flex justify-center items-center transition-all duration-500 ">
                  <Image
                    src={item.img}
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
              )}
              {/* text container */}
              <div className=" flex flex-col gap-4 mt-3 items-center text-center">
                <h1 className="text-xl font-bold ">{item.title}</h1>
              </div>
            </div>
          ))}
      
        
        </div>
      </div>

      {/* button */}
      <div className=" text-2xl flex items-center justify-center mt-10 mb-10">
        <div className="bg-red-800 p-1 rounded-lg text-white text-lg pr-4 pl-4">
          Place Order
        </div>
      </div>
    </div>
  );
};

export default Dishes;
