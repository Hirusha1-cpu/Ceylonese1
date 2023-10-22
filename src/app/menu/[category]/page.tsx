import { pizzas } from "@/data";

import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  params : {category : string}
}

const CategoryPage = async({params}:Props) => {
  // const pizzas:ProductType[] = await getData(params.category)
  return (
    <div className="flex flex-wrap text-red-500">

     {pizzas.map(item=>(
          <Link className="w-full h-[40vh] shadow-lg   px-6 py-2 border border-slate-300 sm:w-1/2 lg:w-1/4 p-4 even:bg-fuchsia-50 flex group  flex-col justify-between" href={`/product/${item.id}`} key={item.id} >
            {/* image container */}
            {item.img && 
            <div className="relative h-[60%] mt-4 ">
              <Image src={item.img} alt="" fill className="object-contain"/>
            </div>
            }
            {/* text container */}
           <div className="items-center justify-between font-semibold flex flex-col">
            <h1 className="text-xl max-xl:text-lg  uppercase p-2">{item.title}</h1>
            <h1 className="group-hover:hidden ">{item.price}</h1>
            <button className="hidden group-hover:block uppercase bg-red-900 text-white p-2 font-semibold rounded-md">Add to cart</button>
            </div>      

          </Link>
        ))}
    </div>
  );
};

export default CategoryPage;
