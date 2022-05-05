import { Router, Request, Response } from "express";
import { Articlecontroller } from "../auth/Controller/article.controller";
import protect from "../middleware/authMiddleware";

const articleRouter = Router();

// Article routes

articleRouter.get("/all", Articlecontroller.getAllArticles);
articleRouter
  .route("/:username")
  .post(protect, Articlecontroller.createArticle)
  .get(protect, Articlecontroller.getArticle)
  .put(protect, Articlecontroller.updateArticle); // get the article id form the query params

articleRouter.get("/read/:articleId", Articlecontroller.getSingleArticle);

export { articleRouter };
