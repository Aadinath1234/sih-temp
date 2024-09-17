import express from "express";
import dotenv from 'dotenv';
import databaseConnection from "./utils/database.js";
import cookieParser from 'cookie-parser';
import userRoute from './routes/userRoute.js';
import pdfRoute from './routes/pdfRoutes.js';  // Import the pdfRoute
import crimeRoutes from './routes/crimeRoutes.js';
import cors from 'cors';

// Load environment variables from .env file
dotenv.config({ path: ".env" });

// Initialize the database connection
databaseConnection();

const app = express();

// Middleware setup
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded
app.use(express.json()); // For parsing application/json
app.use(cookieParser()); // For parsing cookies

// CORS options
const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true
};

// Apply CORS middleware
app.use(cors(corsOptions));

// API routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/pdf",pdfRoute);  // Add the PDF route
app.use("/api/v1/crime",crimeRoutes);

// Start the server
app.listen(process.env.PORT, () => {
    console.log(`Server is listening at Port ${process.env.PORT}`);
});
