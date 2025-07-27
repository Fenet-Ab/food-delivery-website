import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/food-del');
    console.log("✅ MongoDB connected");
    //process.env.MONGODB_URI ||
    
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
  }
};
