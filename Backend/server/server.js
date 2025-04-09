import express from "express";
import dotenv from "dotenv";
import { Client, Storage } from "appwrite";

// Load environment variables from .env file
dotenv.config({ path: "../../config/.env" });

// Initialize the Express app
const app = express();

// Set up Appwrite client and storage
const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1") // Appwrite Cloud API
  .setProject(process.env.APPWRITE_PROJECT_ID); // Your Project ID (replace with actual)

const storage = new Storage(client);

// Fetch all illustration files and log them
const fetchIllustrationFiles = async () => {
  try {
    const bucketId = process.env.APPWRITE_ILLUSTRATION_BUCKET_ID; // Replace with your bucket ID
    console.log("Bucket ID:", bucketId); // Debugging

    // Make sure bucketId is not undefined or empty
    if (!bucketId) {
      throw new Error("Bucket ID is missing");
    }

    // Fetch files from the bucket
    const files = await storage.listFiles(bucketId);
    console.log(`Illustrations fetched:`, files.files);

    // Log file details if files exist
    if (files.files.length > 0) {
      console.log("Appwrite Server status:  200 OK - Files fetched successfully.");
      files.files.forEach((file) => {

        console.log(`File name: ${file.name}, File ID: ${file.$id}`);
      });
    } else {
      console.log("Appwrite Server status: 200 OK - No files in the bucket.");
    }
  } catch (error) {
    console.log("Error fetching files:", error);
    console.log(
      "Server status: 500 Internal Server Error - Failed to fetch files."
    );
  }
};

// Call the function to fetch files when the server starts
fetchIllustrationFiles();

// Define a route to check server health
// app.get("/health", (req, res) => {
//   res.status(200).send("Server is running");
// });

// Define the port to run the server
const PORT = process.env.SERVER_PORT || 9000; // You can change the port if necessary

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  // console.log("Server status: 200 OK - Server started successfully");
});

// Export the fetchIllustrationFiles function if needed for later use
export default { fetchIllustrationFiles };
