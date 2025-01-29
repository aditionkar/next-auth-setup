import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`Successfully connected to Mongo DB`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        throw new Error("Failed to connect to MongoDB");
    }
};

export default connectDB