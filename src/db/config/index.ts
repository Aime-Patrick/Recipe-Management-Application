// CONFIG
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();


// DATABASE CONNECTION
export const dbConnection = async() => {
    try {
        const mongoUri = process.env.MONGODB_URI;
        if (!mongoUri) {
            throw new Error("MONGODB_URI is not defined in the environment variables");
        }
        await mongoose.connect(mongoUri, {
        });
        console.log("Database connected successfully");
    } catch (error) {
        if (error instanceof Error) {
            console.error("Error connecting to database:", error.message);
        } else {
            console.error("Error connecting to database:", error);
        }
        process.exit(1);
    }
}