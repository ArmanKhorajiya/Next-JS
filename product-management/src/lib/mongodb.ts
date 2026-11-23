import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define MONGODB_URI in .env.local");
}

const cached = globalThis as typeof globalThis & {
  mongoose?: {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
  };
};

if (!cached.mongoose) {
  cached.mongoose = {
    conn: null,
    promise: null,
  };
}

async function connectDB() {
  const mongooseCache = cached.mongoose!;

  if (mongooseCache.conn) {
    return mongooseCache.conn;
  }

  if (!mongooseCache.promise) {
    mongooseCache.promise = mongoose.connect(MONGODB_URI!, {
      dbName: "product_management",
    });
  }

  mongooseCache.conn = await mongooseCache.promise;

  return mongooseCache.conn;
}

export default connectDB;
