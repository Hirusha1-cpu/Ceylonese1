import Image from "next/image";
import React, { useState } from "react";
import swal from 'sweetalert';

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
}

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

const handleCheck = () => {
  swal({
    title: "Good job!",
    text: "You clicked the button!",
    icon: "success",
    buttons: ["Aww yiss!"],
  });
};

const Modal: React.FC<ModalProps> = ({ isVisible, onClose }) => {
  const [quantity, setQuantity] = useState(1);

  if (!isVisible) return null;

  return (
    <div className="z-10 fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[600px] flex flex-col">
        <button
          className="text-white text-xl place-self-end"
          onClick={() => onClose()}
        >
          X
        </button>
        <div className="bg-white p-2 rounded">
          <div>
            <div className="shadow-md border text-black border-slate-300 flex flex-col gap-3 p-8">
              <div className="flex flex-row gap-3 pr-20">
                <div>
                  <Image
                    src="/Untitled-1.png"
                    alt=""
                    width={100}
                    height={100}
                  />
                </div>
                <div className="flex flex-col mt-5 justify-start">
                  <h2 className="font-bold">Set Menu 01</h2>
                  <h3>$ 14.00</h3>
                  <div className="flex flex-col gap-5 mt-2">
                    <div>
                      <h6 className="font-semibold ">Curry</h6>
                      {curries.map((curry) => (
                        <h6 className="text-sm" key={curry.id}>
                          {curry.curry}
                        </h6>
                      ))}
                    </div>
                    <div>
                      <h6 className="font-semibold">Meat</h6>
                      {meats.map((curry) => (
                        <h6 className="text-sm" key={curry.id}>
                          {curry.curry}
                        </h6>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex justify-end items-center ml-14">
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
              <div></div>
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
                  <div className="flex justify-center items-center">
                    <div className="bg-red-900 text-white w-4/12 rounded-md flex items-center justify-center p-1 mt-2">
                      <button onClick={() => handleCheck()}>CheckOut</button>
                    </div>
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

export default Modal;
