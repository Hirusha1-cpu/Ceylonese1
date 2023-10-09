"use client"
import Image from "next/image";
import React from "react";

const Commitment = () => {
  const itemStyle = {
    margin: "0.5px", // Adjust this value to set the desired gap
  };

  return (
    <div className="mt-5">
      {/* header */}
      <div className="uppercase text-2xl flex items-center justify-center font-semibold mt-4">
        Our Commitment
      </div>
      {/* commitments */}
      <div className="grid max-md:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-4 mt-5 justify-center items-center">
        <div style={itemStyle}>
          <div className="flex flex-col justify-center items-center gap-1">
            <Image src="/Untitled-1.png" alt="" width={160} height={160} />
            <h2 className="uppercase font-semibold">Fresh Made</h2>
          </div>
        </div>
        <div style={itemStyle}>
          <div className="flex flex-col justify-center items-center gap-1">
            <Image src="/Untitled-2.png" alt="" width={160} height={160} />
            <h2 className="uppercase font-semibold">Safety</h2>
          </div>
        </div>
        <div style={itemStyle}>
          <div className="flex flex-col justify-center items-center gap-1">
            <Image src="/Untitled-3.png" alt="" width={160} height={160} />
            <h2 className="uppercase font-semibold">Timely Delivery</h2>
          </div>
        </div>
        <div style={itemStyle}>
          <div className="flex flex-col justify-center items-center gap-1">
            <Image src="/Untitled-4.png" alt="" width={160} height={160} />
            <h2 className="uppercase font-semibold">Delicious</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commitment;




