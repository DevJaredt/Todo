import mongoose from "mongoose";
import dotenv from "dotenv";

export const connectDB = async () => {
  try {
    dotenv.config();

    const MONGODB_URI = process.env.MONGODB_URI || "";
    await mongoose.connect(MONGODB_URI);
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1);
  }
};
