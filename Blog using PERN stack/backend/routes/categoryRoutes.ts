import { Router } from "express";
import { Categorycontroller } from "../auth/Controller/category.controller";
import protect from "../middleware/authMiddleware";

const categoryRouter = Router();

// Category routes

categoryRouter.post("/create", protect, Categorycontroller.createCategory);

export { categoryRouter };
