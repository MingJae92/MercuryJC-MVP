import { Client, Storage } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1") // Appwrite Cloud API
  .setProject("67c4e0e10034aa6a1341"); // Your Project ID

const storage = new Storage(client);

const fetchIllustrationFiles = async () => {
  try {
    // Replace with your bucket ID
    const files = await storage.listFiles("67def89c002d3bb65de9"); 

    // Log the files array, which is inside `files.files`
    console.log(`Illustrations fetched:`, files.files); 

    // Optionally, log more details if you want to see file properties
    files.files.forEach(file => {
      console.log(`File name: ${file.name}, File ID: ${file.$id}`);
    });
  } catch (error) {
    console.log("Error fetching files:", error);
  }
};

// Call the function to fetch files
fetchFiles();

export default fetchIllustrationFiles
