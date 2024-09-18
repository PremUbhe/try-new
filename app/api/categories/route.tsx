import { NextResponse } from "next/server"

// images
import BakingMaterial from "@/data/Categories/Baking-material.svg"
import FastFoods from "@/data/Categories/fast-food.svg"
import Seafood from "@/data/Categories/Seafood.svg"
import NoodlesRice from "@/data/Categories/Noodles-Rice.svg"
import PetFoods from "@/data/Categories/Pet-Foods.svg"
import Vegetables from "@/data/Categories/Vegetables.svg"



export async function GET() {
    return NextResponse.json(
        [
            {
                "id": 1,
                "name": "Baking material",
                "img": BakingMaterial
            },
            {
                "id": 2,
                "name": "Fast Foods",
                "img": FastFoods
            },
            {
                "id": 3,
                "name": "Noodles & Rice",
                "img": NoodlesRice
            },
            {
                "id": 4,
                "name": "Pet Foods",
                "img": PetFoods
            },
            {
                "id": 5,
                "name": "Seafood",
                "img": Seafood
            },
            {
                "id": 6,
                "name": "Vegetables",
                "img": Vegetables
            },
            {
                "id": 1,
                "name": "Baking material",
                "img": BakingMaterial
            }
        ]
    );
}