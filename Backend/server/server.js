import express from "express";
import artworkRoutes from "../controllers/artworkControllers/artworkControllers.js";
import dotenv from 'dotenv';


// Load environment variables from .env file
dotenv.config({ path: '../../config/.env' });

const app = express();

// Use the SERVER_PORT from the environment variable or default to 3000
const PORT = process.env.SERVER_PORT;  // Default to 3000 if SERVER_PORT is not set

app.use("/api", artworkRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
