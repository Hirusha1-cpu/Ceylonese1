"use client";
import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import Link from "next/link";
import Image from "next/image";
import PlaceReservation from "./PlaceReservation";
import "./navbar.css";
import CartIcon from "./CartIcon";


const MenuNavbar = () => {
  const user = false;
  const [scrolling, setScrolling] = useState(false);
  const [size, setSize] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleSize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleSize);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };
  const handleSize = () => {
    if (window.innerWidth <= 768) {
      setSize(true);
    } else {
      setSize(false);
    }
  };

  return (
    <div
      style={{
        position: "sticky",
        top: "0",
        left: "0",
        right: "0",
        zIndex: "20",
        backgroundColor: scrolling ? "#830b0b" : (size ? "#830b0b" : "transparent"), // Change background color when scrolling
        transition: "background-color 0.3s ease-in-out",
      }}
      id="navbar"
      className={`h-1/2 navbar  text-white  ${
        scrolling ? "" : (size ? "" : "bg-gradient-to-b from-black hover:from-red-900")
      }
     
      p-4 flex justify-between items-center`}    >
      {/* logo */}
      <div className="uppercase font-bold text-4xl ml-2 max-md:text-2xl ">
        <Link href="/">Ceylonese</Link>
      </div>
      {/* left link */}
      {scrolling ? (
        <div className="hidden md:flex gap-4 pl-[41px]">
          <Link href="/">ome</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/">Contact</Link>
        </div>
      ) : (
        <div
          className="hidden md:flex gap-4 pl-36"
          style={{
            transition: "max-width 0.8s ease-in-out", // Add transition to max-width
          }}
        >
          <Link href="/">ome</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/">Contact</Link>
        </div>
      )}
      {/* mobile menu */}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* right link */}
      <div className="hidden md:flex gap-4 items-center text-sm flex-col">
        {!scrolling && (
          <div
            className="flex flex-row gap-5"
            style={{
              maxHeight: !scrolling ? "100px" : "0", // Adjust the max-height values
              overflow: "hidden",
              transition: "max-height 0.5s ease-in-out", // Add transition to max-height
            }}
          >
            <div className="flex items-center gap-2 cursor-pointer">
              <Image src="/phone.png" alt="" width={20} height={20} />
              <span>642312222</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <Image src="/Location.png" alt="" width={20} height={20} />
              <span>61 Dickson Road, Singapore, 209528</span>
            </div>
            {/* {!user ? (
              <Link href="/login">Login</Link>
            ) : (
              <Link href="/orders">Orders</Link>
            )} */}
          </div>
        )}
        <div className="flex flex-row ">
          <div className="row flex flex-row w-72 gap-5 items-center justify-center text-center text-white">
            <div className="col-6 w-1/2 bg-yellow-600 h-9 flex items-center justify-center rounded-md">
              <Link href="/menu"> Place Order </Link>
            </div>
            <div className="col-6 w-1/2 bg-black h-9 flex items-center justify-center rounded-md">
              <Link href="/checkout"> Reservation </Link>
            </div>
            <div>
              {/* <CartIcon /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuNavbar;
