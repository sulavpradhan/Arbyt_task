import {
  createConnection,
  EntityRepository,
  getConnection,
  Repository,
} from "typeorm";
import { Article } from "../Entities/Article";
import { Request, Response } from "express";
import { User } from "../Entities/User";

@EntityRepository(Article)
export class ArticleRepository extends Repository<Article> {
  async createArticle(req: Request, res: Response) {
    const { title, excerpt, content } = req.body;
    // console.log(title, excerpt, content);
    const id = req.params.id;

    try {
      let article = new Article();
      article.title = title;
      article.excerpt = excerpt;
      article.content = content;

      let article2 = new Article(); // for testing
      article2.title = "article 2";
      article2.excerpt = "article 2";
      article2.content = "article 2";

      const currentUser: any = await User.findOne({ id: id });

      // const userArticle: any = await User.find({
      //   where: {
      //     targetId: currentUser.id,
      //   },
      // });

      // console.log(userArticle);

      currentUser.articles = [article, article2];

      let userContent = await this.save(article);
      let userContent2 = await this.save(article2);

      //   let userConnection = await createConnection())

      await getConnection().manager.save(currentUser);

      res.status(400).send(userContent);
    } catch (error) {
      res.send({
        message: "The upload was unsuccessfull",
      });
    }
  }
}
