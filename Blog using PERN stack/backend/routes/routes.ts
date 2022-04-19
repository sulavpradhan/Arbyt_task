import { Router, Request, Response } from "express";
import { Authcontroller } from "../auth/Controller/auth.controller";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("API IS WORKING");
});
router.post("/add", Authcontroller.createUser);
router.post("/login", Authcontroller.loginUser);
router.get("/add/verify/:confirmation_code", Authcontroller.verifyUser);

export { router };
