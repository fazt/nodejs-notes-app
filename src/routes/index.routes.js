import { Router } from "express";
import { renderIndex, renderAbout } from "../controllers/index.controller";

const router = Router();

router.get("/", renderIndex);
router.get("/about", renderAbout);

export default router;
