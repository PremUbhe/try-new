import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import { Products } from "@/lib/Model/products";


// import product1 from "@/data/Products/product-1-1.jpg"
// import product2 from "@/data/Products/product-2-1.jpg"
// import product3 from "@/data/Products/product-3-1.jpg"
// import product4 from "@/data/Products/product-4-1.jpg"
// import product5 from "@/data/Products/product-5-1.jpg"
// import product6 from "@/data/Products/product-6-1.jpg"

// const dataOld = [
//     {
//         "id": 1,
//         "name": "Seeds of Change Organic Quinoa, Brown, & Red Rice",
//         "img": product1,
//         "price": 52.85,
//         "rating": 8,
//         "brand": "NestFood",
//         "discount": 20,
//         "categories": "Snack",
//         "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et mollitia, harum pariatur vitae perspiciatis deserunt delectus doloremque. Officiis, numquam quae.",
//         "stock": 30,
//     },
//     {
//         "id": 2,
//         "name": "All Natural Italian-Style Chicken Meatballs",
//         "img": product2,
//         "price": 28.85,
//         "rating": 7,
//         "brand": "Stouffer",
//         "discount": 10,
//         "categories": "Hodo Foods",
//         "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et mollitia, harum pariatur vitae perspiciatis deserunt delectus doloremque. Officiis, numquam quae.",
//         "stock": 50,
//     },
//     {
//         "id": 3,
//         "name": "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
//         "img": product3,
//         "price": 52.8,
//         "rating": 7.5,
//         "brand": "StarKist",
//         "discount": 25,
//         "categories": "Snack",
//         "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et mollitia, harum pariatur vitae perspiciatis deserunt delectus doloremque. Officiis, numquam quae.",
//         "stock": 75,
//     },
//     {
//         "id": 4,
//         "name": "Foster Farms Takeout Crispy Classic Buffalo Wings",
//         "img": product4,
//         "price": 19.8,
//         "rating": 5.2,
//         "brand": "NestFood",
//         "discount": 5,
//         "categories": "Vegetables",
//         "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et mollitia, harum pariatur vitae perspiciatis deserunt delectus doloremque. Officiis, numquam quae.",
//         "stock": 100,
//     },
//     {
//         "id": 5,
//         "name": "Blue Diamond Almonds Lightly Salted Vegetables",
//         "img": product5,
//         "price": 35.8,
//         "rating": 4.2,
//         "brand": "NestFood",
//         "discount": 14,
//         "categories": "Pet Foods",
//         "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et mollitia, harum pariatur vitae perspiciatis deserunt delectus doloremque. Officiis, numquam quae.",
//         "stock": 100,
//     },
//     {
//         "id": 6,
//         "name": "Chobani Complete Vanilla Greek Yogurt",
//         "img": product6,
//         "price": 55.8,
//         "rating": 7.2,
//         "brand": "NestFood",
//         "discount": 10,
//         "categories": "Hodo Foods",
//         "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et mollitia, harum pariatur vitae perspiciatis deserunt delectus doloremque. Officiis, numquam quae.",
//         "stock": 100,
//     },
// ]

export async function GET() {

    try {
        await dbConnect();

        const data = await Products.find();

        return NextResponse.json({ data, });

    } catch (error) {
        return NextResponse.json("Error in Fetching try is:"+ error );
    }

}