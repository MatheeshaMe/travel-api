import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/user.conroller.js";
import { verifyUser } from "../helpers/verifyRoutesToken.js";

const router = express.Router();

router.put("/:id",verifyUser, updateUser);
router.delete("/:id",verifyUser, deleteUser);
router.get("/:id", getUser);
router.get("/", getUsers);

export default router;
