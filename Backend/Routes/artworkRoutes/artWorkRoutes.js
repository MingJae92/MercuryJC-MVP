import express from "express"
import artworkControllers from "../../controllers/artworkControllers/artworkControllers"

const router = express.Router()

router.get("/artwork", artworkControllers.fetchArtworkFiles)

export default router