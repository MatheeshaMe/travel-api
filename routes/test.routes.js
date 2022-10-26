import express from "express";

import { create, get } from "../controllers/test.controller.js";

const router = express.Router();

router.get("/", get);
router.post("/create", create);

export default router;
