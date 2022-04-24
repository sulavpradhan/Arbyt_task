import { Router, Request, Response } from "express";
import { Authcontroller } from "../auth/Controller/auth.controller";
import { Articlecontroller } from "../auth/Controller/article.controller";
import protect from "../middleware/authMiddleware";

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

// Article routes

router
  .route("/article/:username")
  .post(protect, Articlecontroller.createArticle)
  .get(protect, Articlecontroller.getArticle)
  .put(protect, Articlecontroller.updateArticle); // get the article id form the query params

router.get("/article/read/:articleId", Articlecontroller.getSingleArticle);

export { router };
