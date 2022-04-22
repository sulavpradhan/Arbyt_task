import { Request, Response } from "express";
import { getConnection, getManager } from "typeorm";
import { ArticleRepository } from "../Repositories/author.repo";

export class Articlecontroller {
  // @desc Create blog artice
  // @path /:id/article
  // @access private
  static async createArticle(req: Request, res: Response) {
    let entityManager = getManager() || getConnection().manager;
    const manager = entityManager.getCustomRepository(ArticleRepository);
    await manager.createArticle(req, res);
  }
}
