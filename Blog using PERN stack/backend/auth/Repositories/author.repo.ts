import {
  EntityRepository,
  getConnection,
  getRepository,
  RelationId,
  Repository,
} from "typeorm";
import { Article } from "../Entities/Article";
import { Request, Response } from "express";
import { User } from "../Entities/User";

@EntityRepository(Article)
export class ArticleRepository extends Repository<Article> {
  async createArticle(req: Request, res: Response) {
    const { title, excerpt, content } = req.body;
    const id = req.params.id;

    try {
      // Create new article/blog post

      let article = new Article();
      article.title = title;
      article.excerpt = excerpt;
      article.content = content;

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

      // Save the articles associated with an user

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
}
