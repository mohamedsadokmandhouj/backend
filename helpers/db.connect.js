import mongoose from 'mongoose';

const URI = process.env.DB_URI;

// console.log('URI:', URI);  // Check if URI is being logged correctly

const connectToMongo = async () => {
    try {
        mongoose.set("strictQuery", false);  
        await mongoose.connect(URI);  
        console.log("Database connected!!");
    } catch (error) {
        console.log("Error connecting to the database:", error.message);  
    }
};

export default connectToMongo;
