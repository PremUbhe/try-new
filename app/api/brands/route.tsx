import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import { brands } from "@/lib/Model/brands";


export async function GET() {
    try {
        await dbConnect();
        const data = await brands.find();

        return NextResponse.json({ data, });
    } catch (error) {
        return new NextResponse("Error in Fetching try is:"+ error );
    }
}