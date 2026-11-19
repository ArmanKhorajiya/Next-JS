
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import connectDB from "@/lib/mongodb";

export async function GET() {
  try {
    await connectDB();

    return NextResponse.json({
      success: true,
      message: "MongoDB connected successfully!",
      database: mongoose.connection.name,
      state: mongoose.connection.readyState,
    });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown database error";

    console.error("MongoDB connection error:", errorMessage);

    return NextResponse.json(
      {
        success: false,
        message: "MongoDB connection failed.",
        error: errorMessage,
      },
      { status: 500 }
    );
  }
}
