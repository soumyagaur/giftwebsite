import { NextResponse } from "next/server";

const products = [
  {
    id: 1,
    title: "Xmas Golden Red Solo Bloom Pot",
    price: 1449,
    category: "christmas-gifts",
    subcategory: "plants",
    image: "/images/product1.jpg",
    rating: 4.8,
  },
  {
    id: 2,
    title: "Mixed Fruit Delicious Dry Cake 500gms",
    price: 529,
    category: "christmas-gifts",
    subcategory: "cakes",
    image: "/images/product2.jpg",
    rating: 4.6,
  },
];

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category");

  const filtered = category
    ? products.filter(p => p.category === category)
    : products;

  return NextResponse.json(filtered);
}
