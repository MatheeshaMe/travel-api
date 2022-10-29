import express from "express";
import {
  createRoom,
  deleteRoom,
  getRoomById,
  getRooms,
  updateRoom,
} from "../controllers/room.controller.js";
import { verifyAdmin } from "../helpers/verifyRoutesToken.js";

const router = express.Router();

router.post("/:id", verifyAdmin, createRoom);
router.put("/:id", verifyAdmin, updateRoom);
router.delete("/:id/:hoteId", verifyAdmin, deleteRoom);
router.get("/", getRooms);
router.get("/:id", getRoomById);

export default router;


"635b7bc40465387e5500f8d4",
"635b7bd00465387e5500f8d7",
"635b7bdc0465387e5500f8da"