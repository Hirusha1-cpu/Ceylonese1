import { featuredProducts, pizzas } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
interface CategoryPageProps {
  id: string;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ id }) => {
  return (
    <div>
      <h2 className="ml-6 font-bold text-xl">Cuury</h2>
      {id === "1" && (
        <div className="flex flex-wrap text-red-500 p-6 gap-3 ">
         
          {/* {featuredProducts.map(
            (product) =>
              product.title === "Sicilian" && (
                <div key={product.id}>
                  {product.img ? (
                    <Image src={product.img} alt="" width={20} height={20} />
                  ) : (
                    // Render a placeholder or alternative content
                    <p>Image not available</p>
                  )}
                  <p>{product.title}</p>
                </div>
              )
              
          )} */}
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
      )}
      {id === "2" && 
      <div className="flex flex-wrap text-red-500 p-6 gap-3">
        
        {pizzas.map(item=>(
          <Link className="w-full h-[40vh] shadow-lg px-6 py-2 border border-slate-300 sm:w-1/2 lg:w-1/4 p-4 even:bg-fuchsia-50 flex group flex-col justify-between" href={`/product/${item.id}`} key={item.id} >
          {/* image container */}
          {item.img && 
          <div className="relative h-[60%] mt-4 ">
            <Image src={item.img} alt="" fill className="object-contain"/>
          </div>
          }
          {/* text container */}
         <div className="items-center justify-between font-bold">
          <h1 className="text-xl uppercase p-2">{item.title}</h1>
          <h1 className="group-hover:hidden ">{item.price}</h1>
          <button className="hidden group-hover:block uppercase bg-red-900 text-white p-2 font-semibold rounded-md">Add to cart</button>
          </div>      

        </Link>
        ))}
      </div>
      }
      {id === "3" && <div>category 3</div>}
      {id === "4" && <div>category 4</div>}
      {id === "5" && <div>category 5</div>}
      {id === "6" && <div>category 6</div>}
      {id === "7" && <div>category 7</div>}
    </div>
  );
};
export default CategoryPage;
