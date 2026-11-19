import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import connectDB from "@/lib/mongodb";
import Product from "@/models/Product";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, message: "Invalid product ID." },
        { status: 400 },
      );
    }

    await connectDB();

    const product = await Product.findById(id);

    if (!product) {
      return NextResponse.json(
        { success: false, message: "Product not found." },
        { status: 404 },
      );
    }

    return NextResponse.json({ success: true, product });
  } catch (error) {
    console.error("GET single product error:", error);

    return NextResponse.json(
      { success: false, message: "Failed to fetch product." },
      { status: 500 },
    );
  }
}
