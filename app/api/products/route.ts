import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");

    const client = await clientPromise;
    const db = client.db("ecomgift");

    const products = await db
      .collection("products")
      .find(category ? { category } : {})
      .toArray();

    return NextResponse.json(products);
  } catch (error) {
    console.error("API ERROR:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
