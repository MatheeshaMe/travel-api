import express from "express";
import {
  createHotel,
  deleteHotel,
  getHotelById,
  getHotels,
  updateHotel,
} from "../controllers/hotel.controller.js";

const router = express.Router();

router.post("/", createHotel);
router.put("/:id", updateHotel);
router.delete("/:id", deleteHotel);
router.get("/:id", getHotelById);
router.get("/", getHotels);

export default router;
