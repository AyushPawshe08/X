import express from "express";
import { testGenerateHandler } from "../controllers/generateControllers.js";

const router = express.Router();

router.post("/test",testGenerateHandler);

export default router;