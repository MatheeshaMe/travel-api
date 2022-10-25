import express from "express";
import {
  createHotel,
  deleteHotel,
  getHotelById,
  getHotels,
  updateHotel,
} from "../controllers/hotel.controller.js";

import { verifyAdmin } from "../helpers/verifyRoutesToken.js";
const router = express.Router();

router.post("/", verifyAdmin, createHotel);
router.put("/:id", verifyAdmin, updateHotel);
router.delete("/:id", verifyAdmin, deleteHotel);
router.get("/:id", getHotelById);
router.get("/", getHotels);

export default router;
