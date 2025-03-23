import express from "express";
import artworkRoutes from "../controllers/artworkControllers/artworkControllers.js";
import dotenv from "dotenv";

dotenv.config({ path: "../../config/.env" });

const app = express();

const PORT = process.env.SERVER_PORT;
app.use("/api", artworkRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
