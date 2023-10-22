"use client";
import { featuredProducts } from "@/data";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { RxChevronLeft, RxChevronRight } from "react-icons/rx";
import "./dishesDeck.css";


const DishesDesk = () => {
  const [scrollX, setScrollX] = useState(0);
  const containerRef = useRef(null);
  let itemWidth = 25; // Default item width
  
  const updateItemWidth = () => {
    if(typeof window !== 'undefined'){

      if (   window.innerWidth < 768 && featuredProducts.length != 0) {
        itemWidth = 100/* Set your specific width here for smaller screens */;
      } else {
        itemWidth = 25; // Default width for larger screens
      }
    }
  };

  // Initial update
  updateItemWidth();

  useEffect(() => {
    window.addEventListener("resize", updateItemWidth);

    // const handleAutoplay = () => {
    //   setScrollX((prevScrollX) => (prevScrollX + 0.5) % featuredProducts.length);
    // };
    const handleAutoplay = () => {
      if(typeof window !== 'undefined'){

        if (window.innerWidth < 768) {
          setScrollX((prevScrollX) => (prevScrollX + 1) % featuredProducts.length );
        } else {
          const newIndex = (scrollX + 1) % featuredProducts.length;
          if(newIndex == featuredProducts.length - 1){

          }
          setScrollX((prevScrollX) => (prevScrollX + 1) % featuredProducts.length);
        }
      }
    };

    const interval = setInterval(handleAutoplay, 3000); // Adjust the autoplay interval (in milliseconds)

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", updateItemWidth);
    };
  }, []);

  const scrollLeft = () => {
    // Adjust the scrollX value to create infinite scrolling
    setScrollX((prevScrollX) => {
      const newIndex = prevScrollX - 1;
      return newIndex < 0 ? featuredProducts.length - 1 : newIndex;
    });
  };

  const scrollRight = () => {
    // Adjust the scrollX value to create infinite scrolling
    setScrollX((prevScrollX) => (prevScrollX + 1) % featuredProducts.length);
  };
  // const scrollRight = () => {
  //   // Calculate the index of the next item
  //   const newIndex = (scrollX + 1) % featuredProducts.length;
  
  //   if (newIndex === 0) {
  //     // If the next item is the first item, immediately move to the last item
  //     setScrollX(featuredProducts.length - 1);
  //   } else {
  //     // Otherwise, scroll to the next item
  //     setScrollX(newIndex);
  //   }
  // };
  

  return (
    <div className="md:mt-1 mb-10" id="image-container">
      {/* header */}
      <div className="uppercase text-2xl flex items-center justify-center font-bold">
        Our dishes
      </div>
  
      <div className="w-screen overflow-hidden text-black relative" ref={containerRef}>
        <div className="absolute left-0 top-0 bottom-0 flex items-center">
          <RxChevronLeft className="cursor-pointer text-5xl z-10" onClick={scrollLeft} />
        </div>
  
 
        <div
          className="w-max relative flex items-center justify-center carousel"
          style={{
            transform: `translateX(-${scrollX * itemWidth}vw)`,
            transition: "transform 0.3s ease",
          }}
        >
      
          {featuredProducts.map((item, index) => (
            <div
              key={item.id}
              className="w-screen relative h-[40vh] flex flex-col items-center justify-around p-1 hover:bg-fuchsia-50 transition-all duration-300 sm:w-[25vw] md:w-[25vw] lg:w-[25vw] xl:w-[25vw] xl:h-[35vh] 2xl:w-[20vw]"
              style={{
                display: "flex",
                alignItems: "center", // Center items vertically
                justifyContent: "center", // Center items horizontally
              }}
            >
      
              {item.img && (
                <div className="relative flex-1 w-full hover:rotate-[60deg] flex justify-center items-center transition-all duration-500">
                  <Image src={item.img} alt="" fill className="object-contain" />
                </div>
              )}
     
              <div className="flex flex-col gap-4 mt-3 items-center text-center">
                <h1 className="text-xl font-bold">{item.title}</h1>
              </div>
            </div>
          ))}
        </div>
  
        <div className="absolute right-0 top-0 bottom-0 flex items-center">
          <RxChevronRight className="cursor-pointer text-5xl z-10" onClick={scrollRight} />
        </div>
      </div>
  
      <div className="text-2xl flex items-center justify-center mt-10 mb-10">
        <div className="bg-red-800 p-1 rounded-lg text-white text-lg pr-4 pl-4">Place Order</div>
      </div>
    </div>
  );
};

export default DishesDesk;
