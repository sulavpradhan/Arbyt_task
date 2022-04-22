import { Router, Request, Response } from "express";
import { Authcontroller } from "../auth/Controller/auth.controller";
import { Articlecontroller } from "../auth/Controller/article.controller";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("API IS WORKING");
});
router.post("/add", Authcontroller.createUser);
router.post("/login", Authcontroller.loginUser);
router.get("/add/verify/:confirmation_code", Authcontroller.verifyUser);
router.post("/add/passwordReset", Authcontroller.sendResetLink);
router.post("/add/passwordReset/:id", Authcontroller.resetPassword);
router.post("/:id/article", Articlecontroller.createArticle);
// /:id/article/:username/query strings

export { router };
