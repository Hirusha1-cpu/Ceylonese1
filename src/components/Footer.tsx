import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-red-900 max-md:items-center p-3 lg:p-4 xl:p-5  xl:text-base max-md:text-center text-white flex items-start justify-between lg:flex-row md:flex-row max-sm:flex-col" >
      <div className="col flex justify-center items-center flex-col" id="footer-logo" >
        <h2 className="text-xl uppercase font-bold">Ceylonese</h2>
        <div style={{marginTop:"-20px"}}>
          <Image src="/LOGO 1.png" alt="" width={200} height={30} />
        </div>
      </div>
      <div className="col flex flex-col mb-3">
        <div className="font-bold mb-5">Quick Links</div>
        <div className="col flex flex-col">
          <a href="">Menu</a>
          <a href="">About Us</a>
          <a href="">Terms & Conditions</a>
        </div>
      </div>
      <div className="col">
        <div className="font-bold mb-5">Opening Hours</div>
        <div className="">
          <div className="">
            <p>Delivery Hours</p>
            <p>8 am to 5 pm</p>
          </div>
          <div className="">
            <p>Take-away Hours</p>
            <p>8 am to 5 pm</p>
          </div>
        </div>
      </div>
      <div className="col mb-5">
        <div className="font-bold mb-5">Contact Us</div>
        <div className="">
          <p>91 Dickson Road</p>
          <p>091 712 314</p>
        </div>
      </div>
      <div className="col mb-5 pr-5">
        <div className="font-bold mb-5">Follow Us</div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-2">
            <div className="">
              <Image src="/Facbook.png" alt="" width={19} height={19} />
            </div>
            <a href="">Facebook</a>
          </div>
          <div className="flex flex-row gap-2">
            <div className="">
              <Image src="/insta.png" alt="" width={19} height={19} />
            </div>
            <a href="">Instagram</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;