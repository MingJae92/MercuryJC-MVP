// controllers/imageController.js
import { Client, Storage } from "appwrite";
import dotenv from 'dotenv';


// Load environment variables from .env file
dotenv.config({ path: '../../config/.env' });

// Initialize Appwrite client
const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1") // Appwrite Cloud API
  .setProject(process.env.PROJECT_ID); // Your Appwrite Project ID

const storage = new Storage(client);

// Controller function to fetch artwork files
const fetchArtworkFiles = async (req, res) => {
  try {
    // Replace with your actual bucket ID
    const files = await storage.listFiles(process.env.ARTWORK_BUCKET_ID);

    // Log fetched files for debugging
    console.log("Artwork files fetched:", files.files);

    // Optionally log more details about each file
    // files.files.forEach(file => {
    //   console.log(`File name: ${file.name}, File ID: ${file.$id}`);
    // });

    // Send the list of files as JSON response
    res.status(200).json({ message: "Artwork files fetched successfully", files: files.files });
  } catch (error) {
    // Log the error for debugging
    console.error("Error fetching files:", error);

    // Send error response with status 500
    res.status(500).json({ message: "Failed to fetch artwork files", error: error.message });
  }
};

// Export the function as the default export
export default fetchArtworkFiles;
