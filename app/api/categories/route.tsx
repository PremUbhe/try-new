import { NextResponse } from "next/server"
import dbConnect from "@/lib/db";
import { categories } from "@/lib/Model/categories";


export async function GET() {
    try {
        await dbConnect();
        const data = await categories.find();

        return NextResponse.json({ data, });
    } catch (error) {
        return new NextResponse("Error in Fetching try is:"+ error );
    }
}