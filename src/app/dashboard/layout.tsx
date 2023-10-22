'use client'
import MenuNavbar from "@/components/MenuNavbar"
import Navbar from "@/components/Navbar"
// import { useRouter } from "next/router"

export default function DashBoardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {


    // const router = useRouter()
    // console.log(router);
    

    return (
      <section>
        {/* {router === "/menu" ? <MenuNavbar /> : <Navbar />} */}
    
        {children}
      </section>
    )
  }