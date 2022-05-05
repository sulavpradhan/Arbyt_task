import { EntityRepository, getRepository, Repository } from "typeorm";
import { Article } from "../Entities/Article";
import { Request, response, Response } from "express";
import { User } from "../Entities/User";
import { Category } from "../Entities/Category";

@EntityRepository(Article)
export class ArticleRepository extends Repository<Article> {
  // Create new article/blog post

  async createArticle(req: Request, res: Response) {
    console.log(req.body);
    const { title, excerpt, content } = req.body;
    const id = req.user.id;

    try {
      let article = new Article();
      article.title = title;
      article.excerpt = excerpt;
      article.content = content;

      // todo: article.categories = categories : string[]

      const UserRepo = getRepository(User);

      // Find the author of the post using id

      const currentUser: any = await UserRepo.findOne({ id: id });

      // Find the aritcles that the author has posted using the realtion

      const userWithArticle: any = await UserRepo.findOne(
        { id: id },
        {
          relations: ["articles"],
        }
      );

      console.log(userWithArticle);

      // Save the articles associated with an user and also save the categories

      const articleArray = userWithArticle.articles;

      currentUser.articles = [...articleArray, article];

      let userContent = await this.save(article);

      await UserRepo.save(currentUser);

      res.status(400).send(userContent);
    } catch (error) {
      res.send({
        message: "The upload was unsuccessfull",
      });
    }
  }

  // Get article of current user

  async getArticle(req: Request, res: Response) {
    const userId = req.user.id;
    try {
      const UserRepo = getRepository(User);

      // Find the aritcles associated with the user using the user id
      const currentArticle = await Article.findOne({ id: userId });

      const userWithArticle: any = await UserRepo.findOne(
        { id: userId },
        {
          relations: ["articles"],
        }
      );

      const userArticle = userWithArticle.articles;

      res.send({
        userId: userId,
        articles: userArticle,
      });
    } catch (error) {
      res.send(error);
    }
  }

  // Update Article

  async updateArticle(req: Request, res: Response) {
    const { title, excerpt, content } = req.body;
    const user = req.user;
    const articleId: string = req.query.articleId?.toString() || "";
    try {
      const currentArticle: any = await Article.findOne({ id: articleId });
      currentArticle.title = title;
      currentArticle.excerpt = excerpt;
      currentArticle.content = content;

      let updatedArticle = await this.save(currentArticle);

      res.send(updatedArticle);
    } catch (error) {
      res.send(error);
    }

    //  todo: find article by id and put article.content = form the body or something
  }

  // Get single article
  async getSingleArticle(req: Request, res: Response) {
    const articleId: string = req.params.articleId;
    try {
      const currentArticle: any = await Article.findOne({ id: articleId });
      res.status(200).json({
        title: currentArticle.title,
        excerpt: currentArticle.excerpt,
        content: currentArticle.content,
      });
    } catch (error) {}
  }

  // Get all the articles
  async getAllArticles(req: Request, res: Response) {
    try {
      const allArticle: any = await Article.find();
      res.status(200).send(allArticle);
    } catch (error) {
      response.status(500).send({
        message: "Something went worng",
      });
    }
  }
}
