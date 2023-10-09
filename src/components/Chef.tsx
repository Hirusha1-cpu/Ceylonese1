"use client";
import Image from "next/image";
import React from "react";

const Chef = () => {
  return (
    <div className=" bg-red-900 flex flex-row justify-evenly mt-10">
      <div className="max-md:hidden">
        <div className="chef-image-container">
          <Image src="/Chef1.png" alt="" width={500} height={500} />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-6/12 max-md:w-9/12 w text-center">
        <h2 className="text-white font-bold text-xl xl:text-2xl mb-7">Lorem ipsum dolor sit amet consectetur.</h2>
        <p className="text-white xl:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum odio
          quam beatae voluptate ullam minima vitae rerum, magni nulla explicabo
          qui est sint error deleniti impedit, iste iure corporis sunt Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Modi delectus
          aspernatur cum eaque quia. Delectus hic labore provident officiis
          repellat debitis voluptatem neque accusamus laborum pariatur.
          Voluptates aut vel nam!!
        </p>
      </div>
      <div className="max-md:hidden mt-20">
        <div className="chef-image-container ">
          <Image src="/Chef2.png" alt="" width={500} height={500} />
        </div>
      </div>
    </div>
  );
};

export default Chef;
