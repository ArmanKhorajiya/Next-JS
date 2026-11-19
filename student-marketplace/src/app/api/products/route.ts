
import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Product from "@/models/Product";

export async function GET() {
  try {
    await connectDB();

    const products = await Product.find().sort({ createdAt: -1 });

    return NextResponse.json({
      success: true,
      count: products.length,
      products,
    });
  } catch (error) {
    console.error("GET products error:", error);

    return NextResponse.json(
      { success: false, message: "Failed to fetch products." },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();

    const {
      name,
      category,
      condition,
      type,
      price,
      description,
      image,
      seller,
      contact,
    } = body;

    if (
      !name?.trim() ||
      !category ||
      !condition ||
      !type ||
      !description?.trim() ||
      !seller?.trim() ||
      !contact?.trim()
    ) {
      return NextResponse.json(
        { success: false, message: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    if (!["Sale", "Free", "Exchange"].includes(type)) {
      return NextResponse.json(
        { success: false, message: "Invalid listing type." },
        { status: 400 }
      );
    }

    const productPrice =
      type === "Sale" ? Number(price) : 0;

    if (
      type === "Sale" &&
      (!Number.isFinite(productPrice) || productPrice <= 0)
    ) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid price." },
        { status: 400 }
      );
    }

    const product = await Product.create({
      name: name.trim(),
      category,
      condition,
      type,
      price: productPrice,
      description: description.trim(),
      image: image || "",
      seller: seller.trim(),
      contact: contact.trim(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Product added successfully!",
        product,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST product error:", error);

    return NextResponse.json(
      { success: false, message: "Failed to add product." },
      { status: 500 }
    );
  }
}
