import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

// FETCH ALL CATEGORIES
export const GET = async  () => {
    try{
        const categories = await prisma.category.findMany();
        return new NextResponse(JSON.stringify(categories), { status: 200});
    }catch(err){
        return new NextResponse(JSON.stringify({message:"Algo salió mal"}), { status: 500});
    }
};

export const POST = () => {
    return new NextResponse("Hello", { status: 200});
}