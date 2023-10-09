"use client"
import CartIcon from "@/components/CartIcon";
import MenuSlide from "@/components/MenuSlide";
import Slider from "@/components/Slider";
import { exploremenu, menu } from "@/data";
import Link from "next/link";
import { RefObject, SetStateAction, useEffect, useRef, useState } from 'react';
import { IoMdArrowDropright } from "react-icons/Io";
import CategoryPage from "./[category]/page";

const MenuPage = () => {
  // Initialize state to keep track of the clicked category
  const [selectedCategory, setSelectedCategory] = useState<number | null>(1);
    // Create a ref for the element you want to focus on
    const focusElementRef: RefObject<HTMLAnchorElement> = useRef(null);

  // Function to handle category clicks
  const handleCategoryClick = (categoryId: number) => {
    // Update the state with the clicked category's ID
    setSelectedCategory(categoryId);
  };
    // Use useEffect to focus on the element when the component mounts
    useEffect(() => {
      if (focusElementRef.current) {
        focusElementRef.current.focus();
      }
    }, []);
  return (
 
              <div>
              <MenuSlide  />
              <div className="flex flex-row max-sm:flex-col">
                {/* menu dropdowns */}
                <div className="w-1/5 max-sm:w-full max-sm:p-3 pl-3" >
                  <h2 className="font-medium flex justify-center text-2xl">
                    Explore Our Menu
                  </h2>
                  {/* menus */}
                  <div className="flex flex-col gap-3 mt-3 border-b-slate-100 mb-6">
                    {exploremenu.map((category) => (
                      <a
                        href={`#${category.id}`} // Use the category id as the anchor link
                        key={category.id}
                        className={`border-2 p-2 border-b-neutral-400 pl-3 font-light text-md flex flex-row justify-between ${
                          selectedCategory === category.id ? 'selected-category' : ''
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleCategoryClick(category.id);
                        }}
                        // Assign the ref to the element you want to focus
                        ref={selectedCategory === category.id ? focusElementRef : null}
                        tabIndex={0} // Add tabIndex to make the element focusable
                      >
                        {category.title}
                        <span>
                          <IoMdArrowDropright />
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
                {/* menu grid */}
                <div className="w-3/4 flex flex-col max-sm:w-full">
                  <div className="flex flex-row p-4">
                    <div className="w-11/12 flex justify-center items-center font-semibold text-2xl border-b-2">
                      Set menu
                    </div>
                    <div className="w-1/12 bg-red-800 flex justify-center items-center rounded-full h-10">
                      <CartIcon />
                    </div>
                  </div>
        
                  {selectedCategory && (
                    <div className="">
                      <CategoryPage
                        id={selectedCategory ? selectedCategory.toString() : '1'}
                      />
                    </div>
                  )}
                  {/* Render the menu image divs */}
                </div>
              </div>
            </div>
  );
};

export default MenuPage;
         
      
         
