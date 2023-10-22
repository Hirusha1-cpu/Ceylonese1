"use client"
import Image from "next/image";
import React from "react";

const Delivery = () => {
  return (
    <div className="">
      {/* header */}
      <div className="flex justify-center items-center font-semibold text-xl mt-5 text-center xl:text-2xl">
      <h2>Giving your hunger a safer, faster and better alternative</h2>

      </div>
      <div className="flex flex-row">
        <div className="mt-3 max-md:hidden">
          <Image src="/sm.png" alt="" width={2000} height={2000} />
        </div>
        <div className=" mt-4 p-2 flex max-md:justify-center max-md:text-center md:pr-20  text-center xl:text-lg xl:mr-3">
          <p>
            Revolutionize your dining experience with Ceylonese - where were
            dedicated to giving your hunger a safer, faster, and better
            alternative. Our commitment to quality, hygiene, and swift service
            ensures that you can savor every bite of our authentic Sri Lankan
            cuisine with complete peace of mind. Say goodbye to compromise and
            embrace a new standard of excellence in dining, only at Ceylonese.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
