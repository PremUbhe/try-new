import { NextResponse } from "next/server"


export async function GET() {
    return NextResponse.json({
        id: "1",
        name: "prem",
    });
}

export async function POST(request: Request) {
    const data = await request.json()
    return NextResponse.json({
        data,
    });
}