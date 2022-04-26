import { Router, Request, Response } from "express";
import { Authcontroller } from "../auth/Controller/auth.controller";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("API IS WORKING");
});

// User routes

router.post("/add", Authcontroller.createUser);
router.post("/login", Authcontroller.loginUser);
router.get("/add/verify/:confirmation_code", Authcontroller.verifyUser);
router.post("/add/passwordReset", Authcontroller.sendResetLink);
router.post("/add/passwordReset/:id", Authcontroller.resetPassword);

export { router };
