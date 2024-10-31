import express from 'express';
import dotenv from 'dotenv';
import connectToMongo from './helpers/db.connect.js';
import userRoutes from './routes/user.routes.js';

dotenv.config();

const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Use routes
app.use('/api/users', userRoutes);

const port = process.env.PORT || 8000;

const startServer = async () => {
    try {
        await connectToMongo();  
        console.log("Database connected successfully!");

        app.listen(port, (err) => {
            if (err) {
                console.log('Error:', err);
            } else {
                console.log(`Server running on port: ${port}`);
            }
        });

    } catch (error) {
        console.error("Failed to connect to the database:", error.message);
    }
};

startServer();

