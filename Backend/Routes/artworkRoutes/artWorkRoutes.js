// routes/artworkRoutes.js
import express from "express";
import artworkControllers from "../../controllers/artworkControllers/artworkControllers.js";

const router = express.Router();

router.get("/", artworkControllers.fetchArtworkFiles);

export default router;
