import express from "express";
import * as welcomeController from "../controllers/welcomeController.js";


const router = express.Router();


router.get("/", welcomeController.Welcome);
router.get("/welcome1", welcomeController.Welcome1);
router.get("/welcome2", welcomeController.Welcome2);
router.get("/welcome3", welcomeController.Welcome3);



export default router;