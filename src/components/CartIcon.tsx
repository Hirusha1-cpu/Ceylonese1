"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Modal from "./Modal";

const CartIcon = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="flex items-center gap-4">
      <div className="relative w-8 h-8 md:w-5 md:h-5">
        <Image src="/cart.png" alt="" fill onClick={()=>setShowModal(true) }/>
        <Modal isVisible={showModal} onClose={()=>{
          setShowModal(false);
        }}/>
      </div>
    </div>
  );
};

export default CartIcon;
