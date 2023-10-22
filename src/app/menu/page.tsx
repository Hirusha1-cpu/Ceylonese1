"use client";
import MenuSlide from "@/components/MenuSlide";
import { exploremenu, pizzas } from "@/data";
// import { IoMdArrowDropright } from "react-icons/Io";
import Image from "next/image";
import Link from "next/link";
import React, { RefObject, useEffect, useRef } from "react";

type Props = {
  params: { category: string };
};

const CategoryPage = ({ params }: Props) => {
  const focusElementRef: RefObject<HTMLDivElement> = useRef(null);

  // Use useEffect to focus on the element when the component mounts
  // useEffect(() => {
  //   if (focusElementRef.current) {
  //     focusElementRef.current.focus();
  //   }
  // }, []);

  return (
    <div className="flex flex-col mb-5">
      <div>
        <MenuSlide />
      </div>
      <div
        className="flex flex-row max-sm:flex-col "
        // Assign the ref to the element you want to focus
        ref={focusElementRef}
        tabIndex={0} // Add tabIndex to make the element focusable
        style={{ marginTop: "-70px" }}
      >
        {/* menu dropdowns */}
        <div className="max-sm:w-full max-sm:p-3 pl-10 flex flex-col gap-3 w-3/12 mt-5">
          <h2 className="font-medium flex text-2xl">Explore Our Menu</h2>
          {/* menus */}
          <div className="flex flex-col gap-3 border-b-slate-100 mb-6 ">
            {exploremenu.map((menu) => (
              <div
                key={menu.id}
                className={`p-2 border-b-2 pl-1 font-light text-md flex flex-row justify-between`}
              >
                {menu.title}
                <span>{/* <IoMdArrowDropright /> */}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:border-l-2 mt-5 w-9/12 max-md:ml-11 max-md:mr-11">
          <div className="max-md:justify-center max-md:items-center flex justify-center items-center text-xl border-b-2 mb-3 text-slate-400">
            <h2>Set Menu</h2>
            <div className=""></div>
          </div>
          <div className="text-lg mb-3 pl-3 text-slate-900">
            <h2>Set Menu</h2>
          </div>
          <div className="flex justify-center max-md:justify-center max-md:items-center items-center flex-wrap text-red-500 gap-2">
            {pizzas.map((item) => (
              <Link
                className="w-full h-[40vh] shadow-lg px-6 py-2 border border-slate-300 sm:w-1/2 lg:w-1/4 p-4 even:bg-fuchsia-50 flex  group flex-col justify-between md:flex md:max-w-[20%] lg:max-w-[18%]" // Add md:flex and md:max-w-[25%]
                href={`/product/${item.id}`}
                key={item.id}
              >
                {/* image container */}
                {item.img && (
                  <div className="relative h-[60%] mt-4">
                    <Image
                      src={item.img}
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                )}
                {/* text container */}
                <div className="items-center justify-between font-semibold flex flex-col">
                  <h1 className="text-lg max-xl:text-lg uppercase p-2">
                    {item.title}
                  </h1>
                  {/* <h1 className=" ">{item.price}</h1> */}
                  <button className="uppercase bg-red-900 text-white p-2 font-semibold rounded-md">
                    Add to cart
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
