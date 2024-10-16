import { NextResponse } from "next/server";

// images
import Banner1 from "@/data/Banners/banner-1.png";
import Banner2 from "@/data/Banners/banner-2.png";
import Banner3 from "@/data/Banners/banner-3.png";

export async function GET() {
  return NextResponse.json({
    data: [
      {
        id: 1,
        name: "Everyday Fresh & Clean with Our Products",
        img: Banner1,
      },
      {
        id: 2,
        name: "Make your Breakfast Healthy and Easy",
        img: Banner2,
      },
      {
        id: 3,
        name: "The best Organic Products Online",
        img: Banner3,
      },
      {
        id: 4,
        name: "Make your Breakfast Healthy and Easy",
        img: Banner2,
      },
    ],
  });
}
