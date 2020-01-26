import { Router } from "express";
import { indexInicio } from "../controllers/index.controllers";
const router = Router();
router.route("/").get(indexInicio);
export default router;
