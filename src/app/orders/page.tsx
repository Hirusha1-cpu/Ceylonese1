import React from "react";

const OrderPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40">
      <table className="w-full border-separate border-spacing-3">
        <thead>
          <tr className="text-left">
            <th className="hidden md:block">Order ID</th>
            <th>Date</th>
            <th>Price</th>
            <th className="hidden md:block">Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-red-50 text-sm md:text-base odd:bg-red-400-100" >
            <td className="hidden md:block py-6 px-1">1234567890</td>
            <td className="py-6 px-1">19.07.2023</td>
            <td className="py-6 px-1">45.34</td>
            <td className="hidden md:block py-6 px-1">Big Burger menu(2), Vege Pizza (2), CocaCola (2)</td>
            <td className="py-6 px-1">On the way (approx) </td>
          </tr>
          <tr className="bg-red-50 text-sm md:text-base even:bg-gray-100" >
            <td className="hidden md:block py-6 px-1">1234567890</td>
            <td className="py-6 px-1">19.07.2023</td>
            <td className="py-6 px-1">45.34</td>
            <td className="hidden md:block py-6 px-1">Big Burger menu(2), Vege Pizza (2), CocaCola (2)</td>
            <td className="py-6 px-1">On the way (approx) </td>
          </tr>
          <tr className="bg-red-50 text-sm md:text-base even:bg-gray-100" >
            <td className="hidden md:block py-6 px-1">1234567890</td>
            <td className="py-6 px-1">19.07.2023</td>
            <td className="py-6 px-1">45.34</td>
            <td className="hidden md:block py-6 px-1">Big Burger menu(2), Vege Pizza (2), CocaCola (2)</td>
            <td className="py-6 px-1">On the way (approx) </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrderPage;
