import { Client, Storage } from "appwrite";
import dotenv from "dotenv";

// Load environment variables
dotenv.config({ path: "../../config/.env" });  // Adjust path if necessary

// Initialize Appwrite client
const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")  // Appwrite endpoint
  .setProject(process.env.PROJECT_ID);          // Appwrite project ID

// Initialize Appwrite storage
const storage = new Storage(client);

// Controller function to fetch artwork files
const fetchArtworkFiles = async (req, res) => {
  try {
    // Fetch artwork files from the storage bucket
    const files = await storage.listFiles(process.env.ARTWORK_BUCKET_ID);

    // Respond with the files
    res.status(200).json({
      message: "Artwork files fetched successfully",
      files: files.files,
    });
  } catch (error) {
    console.error("Error fetching files:", error);
    res.status(500).json({
      message: "Failed to fetch artwork files",
      error: error.message,
    });
  }
};

export default {
  fetchArtworkFiles,
};
