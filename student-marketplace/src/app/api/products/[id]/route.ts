
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import connectDB from "@/lib/mongodb";
import Product from "@/models/Product";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, message: "Invalid product ID." },
        { status: 400 }
      );
    }

    await connectDB();

    const product = await Product.findById(id).lean();

    if (!product) {
      return NextResponse.json(
        { success: false, message: "Product not found." },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, product });
  } catch (error) {
    console.error("GET product error:", error);

    return NextResponse.json(
      { success: false, message: "Failed to fetch product." },
      { status: 500 }
    );
  }
}
