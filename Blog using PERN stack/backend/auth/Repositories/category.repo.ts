import { EntityRepository, getRepository, Repository } from "typeorm";
import { Article } from "../Entities/Article";
import { Request, Response } from "express";
import { User } from "../Entities/User";
import { Category } from "../Entities/Category";

@EntityRepository(Category)
export class CategoryRepository extends Repository<Category> {
  // Create new category

  async createCategory(req: Request, res: Response) {
    const { categoryName } = req.body;
    const id = req.user.id;

    try {
      let category: any = new Category();
      category.categoryName = categoryName;

      const UserRepo = getRepository(User);

      // Find the user using id

      //   const currentUser: any = await UserRepo.findOne({ id: id });

      // Only admin can create a category

      //   if (currentUser.role == "admin") {

      //   }

      let newCategory = await this.save(category);

      //   await UserRepo.save(currentUser);

      res.status(400).send(newCategory);
    } catch (error) {
      res.send({
        message: "The category creation was unsuccessfull",
      });
    }
  }

  //   // Get article of current user

  //   async getArticle(req: Request, res: Response) {
  //     const userId = req.user.id;
  //     try {
  //       const UserRepo = getRepository(User);

  //       // Find the aritcles associated with the user using the user id
  //       const currentArticle = await Article.findOne({ id: userId });

  //       const userWithArticle: any = await UserRepo.findOne(
  //         { id: userId },
  //         {
  //           relations: ["articles"],
  //         }
  //       );

  //       const userArticle = userWithArticle.articles;

  //       res.send({
  //         userId: userId,
  //         articles: userArticle,
  //       });
  //     } catch (error) {
  //       res.send(error);
  //     }
  //   }

  //   // Update Article

  //   async updateArticle(req: Request, res: Response) {
  //     const { title, excerpt, content } = req.body;
  //     const user = req.user;
  //     const articleId: string = req.query.articleId?.toString() || "";
  //     try {
  //       const currentArticle: any = await Article.findOne({ id: articleId });
  //       currentArticle.title = title;
  //       currentArticle.excerpt = excerpt;
  //       currentArticle.content = content;

  //       let updatedArticle = await this.save(currentArticle);

  //       res.send(updatedArticle);
  //     } catch (error) {
  //       res.send(error);
  //     }

  //     //  todo: find article by id and put article.content = form the body or something
  //   }

  //   // Get single article
  //   async getSingleArticle(req: Request, res: Response) {
  //     const articleId: string = req.params.articleId;
  //     try {
  //       const currentArticle: any = await Article.findOne({ id: articleId });
  //       res.status(400).json({
  //         title: currentArticle.title,
  //         excerpt: currentArticle.excerpt,
  //         content: currentArticle.content,
  //       });
  //     } catch (error) {}
  //   }
}
