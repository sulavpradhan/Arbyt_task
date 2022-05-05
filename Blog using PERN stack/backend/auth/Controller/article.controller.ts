import { Request, Response } from "express";
import { getConnection, getManager } from "typeorm";
import { ArticleRepository } from "../Repositories/author.repo";

export class Articlecontroller {
  // @desc Create blog article
  // @path /:id/article
  // @access private
  static async createArticle(req: Request, res: Response) {
    let entityManager = getManager() || getConnection().manager;
    const manager = entityManager.getCustomRepository(ArticleRepository);
    await manager.createArticle(req, res);
  }

  // @desc Get article
  // @path /article/:username
  // @access private
  static async getArticle(req: Request, res: Response) {
    let entityManager = getManager() || getConnection().manager;
    const manager = entityManager.getCustomRepository(ArticleRepository);
    await manager.getArticle(req, res);
  }

  // @desc Update blog article
  // @path /article/:username
  // @access private
  static async updateArticle(req: Request, res: Response) {
    let entityManager = getManager() || getConnection().manager;
    const manager = entityManager.getCustomRepository(ArticleRepository);
    await manager.updateArticle(req, res);
  }

  // @desc get single article
  // @path /article/read/:articleId
  // @access public
  static async getSingleArticle(req: Request, res: Response) {
    let entityManager = getManager() || getConnection().manager;
    const manager = entityManager.getCustomRepository(ArticleRepository);
    await manager.getSingleArticle(req, res);
  }
  // @desc get all article
  // @path /article/all
  // @access public
  static async getAllArticles(req: Request, res: Response) {
    let entityManager = getManager() || getConnection().manager;
    const manager = entityManager.getCustomRepository(ArticleRepository);
    await manager.getAllArticles(req, res);
  }
}
