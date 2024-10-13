import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import { Products } from "@/lib/Model/products";

export async function GET(req: Request, context: any) {
  const { params } = context;

  try {
    await dbConnect();

    const productId = params.id;

    if (!productId) {
      return NextResponse.json(
        { error: "Product ID is required" },
        { status: 400 }
      );
    }

    const data = await Products.findById(productId);

    if (!data) {
      return NextResponse.json(
        { error: "Product not found" },
        { status: 404 });
    }

    return NextResponse.json({ data });

  } catch (error: any) {
    
    return NextResponse.json(
      { error: "Error in Fetching: " + error.message },
      { status: 500 }
    );
  }
}
