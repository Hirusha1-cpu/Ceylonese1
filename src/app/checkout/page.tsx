"use client";
import Image from "next/image";
import React, { useState } from "react";

const curries = [
  { id: 1, curry: "Dhal Cuury" },
  { id: 2, curry: "Beetroot Cuury" },
  { id: 3, curry: "Cucumber Cuury" },
  { id: 4, curry: "Bandakka Cuury" },
];
const meats = [
  { id: 1, curry: "Chicken Cuury" },
  { id: 2, curry: "Beef Cuury" },
  { id: 3, curry: "Calf Cuury" },
  { id: 4, curry: "Lamb Cuury" },
];

const CheckoutPage: React.FC = () => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div>
      <div>
        {/* header */}
        <div className="flex items-center justify-center font-bold md:text-xl">
          <h2>
            Experience the soul of Sri Lankan cuisine at Ceylonese, Singapore
          </h2>
        </div>
        {/* container of form and receipt */}
        <div className="flex flex-row justify-center  max-md:flex-col gap-10">
          {/* form */}
          <div className=" max-md:p-10">
            {/* contact */}
            <div>
              {/* header and form*/}
              <div>
                <h2 className="pl-2">Contact</h2>
                {/* contact */}
                <div>
                  <form
                    action=""
                    className="py-4 mt-4 border-t flex flex-col gap-3 pl-2"
                  >
                    {/* fname and lastname */}
                    <div className="flex flex-row max-md:flex-col gap-1">
                      <div className="w-full">
                        <input
                          type="text"
                          placeholder="Full Name"
                          id="txtFullName"
                        />
                      </div>
                      <div className="w-full">
                        <input
                          type="text"
                          placeholder="Last Name"
                          id="txtLastName"
                        />
                      </div>
                    </div>
                    {/* email */}
                    <div>
                      <input type="email" placeholder="Email" id="txtEmail" />
                    </div>
                    {/* phone */}
                    <div>
                      <input type="text" placeholder="Phone" id="txtPhone" />
                    </div>
                  </form>
                </div>
                {/* delivery method */}
                <div>
                  <h2 className="pl-2">Deliver Method</h2>
                  <form
                    action=""
                    className="py-4 mt-4 border-t flex flex-col gap-3 pl-2"
                  >
                    {/* delivery method */}
                    <div className="shadow-md border border-slate-300">
                      <div
                        className={`flex flex-row gap-5 border border-slate-300 px-6 py-2
                       
                      `}
                      >
                        <input
                          type="radio"
                          id="txtDeliver"
                          name="deliveryMethod"
                        />
                        <label htmlFor="txtDeliver" className="radio-label">
                          Deliver
                        </label>
                      </div>
                      <div className="flex flex-row gap-5 border border-slate-300 px-6 py-2">
                        <input
                          type="radio"
                          id="txtDineIn"
                          name="deliveryMethod"
                        />
                        <label htmlFor="txtDineIn" className="radio-label">
                          Dine in
                        </label>
                      </div>
                      <div className="flex flex-row gap-5 border border-slate-300 px-6 py-2">
                        <input
                          type="radio"
                          id="txtPickUp"
                          name="deliveryMethod"
                        />
                        <label htmlFor="txtPickUp" className="radio-label">
                          Pick up
                        </label>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* delivery address */}
            <div>
              <h2 className="pl-2">Delivery Address</h2>
              <form
                action=""
                className="py-4 mt-4 border-t flex flex-col gap-3 pl-2"
              >
                {/* country */}
                <div className="">
                  <input
                    type="text"
                    placeholder="Country/Region"
                    id="txtEmail"
                  />
                </div>
                {/* fname and lastname */}
                <div className="flex flex-row max-md:flex-col gap-2">
                  <div className="mr-6">
                    <input
                      type="text"
                      placeholder="Full Name"
                      id="txtFullName"
                    />
                  </div>
                  <div className="mr-6">
                    <input
                      type="text"
                      placeholder="Last Name"
                      id="txtLastName"
                    />
                  </div>
                </div>

                {/* address */}
                <div>
                  <input type="text" placeholder="Address" id="txtAddress" />
                </div>
                {/* Appartment */}
                <div>
                  <input
                    type="text"
                    placeholder="Appartment"
                    id="txtAppartment"
                  />
                </div>
                {/* postal code */}
                <div>
                  <input
                    type="text"
                    placeholder="Postal Code"
                    id="txtPostalCode"
                  />
                </div>
              </form>
            </div>

            {/* payment method */}
            <div>
              <div className="flex flex-row pt-4 gap-10 items-center mb-4">
                <div className="max-md:hidden">

                <h2 className="pl-2 ">Payment Method</h2>
                </div>
                <div >
                {/* {window.innerWidth < 768 ? (
            <Image src="/paynow-logo.png" alt="" width={100} height={20} />
          ) : (
            <Image src="/paynow-logo.png" alt="" width={100} height={20} />

          )} */}
          <Image src="/paynow-logo.png" alt="" width={100} height={20} />
                  </div>
                <div className="bg-red-900 text-white font-bold px-10 py-1  rounded-md ml-16">
                  Pay Now
                </div>
              </div>
            </div>
          </div>
          {/* cart receipt */}
          <div>
            <div className="shadow-md border border-slate-300 flex flex-col gap-3 p-8">
              {/* set menu */}
              <div className="flex flex-row gap-3 pr-20">
                <div>
                  <Image
                    src="/Untitled-1.png"
                    alt=""
                    width={100}
                    height={100}
                  />
                </div>
                {/* menu */}
                <div className="flex flex-col mt-5 justify-start">
                  <h2 className="font-bold">Set Menu 01</h2>
                  <h3>$ 14.00</h3>
                  <div className="flex flex-col gap-5 mt-2">
                    <div>
                      <h6 className="font-semibold ">Curry</h6>
                      {curries.map((curry) => (
                        <h6 className="text-sm" key={curry.id}>{curry.curry}</h6>
                      ))}
                    </div>
                    <div>
                      <h6 className="font-semibold">Meat</h6>
                      {meats.map((curry) => (
                        <h6 className="text-sm" key={curry.id}>{curry.curry}</h6>
                      ))}
                    </div>
                  </div>
                </div>
                {/* cart */}
                <div className="flex justify-end items-center ml-14">
                  {/* quntity */}
                  <div className="flex justify-between  w-full p-3  ">
                    <div className="flex gap-4 items-center">
                        Qty:
                      <button
                        onClick={() =>
                          setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
                        }
                        className="bg-red-900 w-6  flex justify-center items-center text-white rounded-full"
                      >
                        {"-"}
                      </button>
                      <span>{quantity}</span>
                      <button
                        onClick={() =>
                          setQuantity((prev) => (prev < 9 ? prev + 1 : 9))
                        }
                        className="bg-red-900 w-6 flex justify-center items-center text-white rounded-full"
                      >
                        {"+"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* fried rice */}
              <div></div>
              {/* totals */}
              <div>
                <div className="border-t border-slate-300">
                        <div className="flex justify-between flex-row ">
                            <div>Subtotal</div>
                            <div>$100.00</div>
                        </div>
                        <div className="flex justify-between flex-row ">
                            <div>Delivery</div>
                            <div>$10.00</div>
                        </div>
                        <div className="flex justify-between flex-row ">
                            <div>Tax</div>
                            <div>$20.00</div>
                        </div>
                        <div className="flex justify-between flex-row font-bold ">
                            <div>Total</div>
                            <div>$130.00</div>
                        </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
