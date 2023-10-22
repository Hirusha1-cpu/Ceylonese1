import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server"

const prisma = new PrismaClient()

//fetch all categories
export const GET = async() =>{
    try {
       const categories = await prisma.category.findMany()
       return new NextResponse(JSON.stringify(categories),{status: 200})

    } catch (error) {
        console.log(error);
        
        return new NextResponse(JSON.stringify({message:"Something Went Wrong"}),{status: 500})
    }
}
export const POST = () =>{
    return new NextResponse("Hello",{status: 200})
}