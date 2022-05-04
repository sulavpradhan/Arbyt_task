import { Request, Response } from "express";
import { getConnection, getManager } from "typeorm";
import { CategoryRepository } from "../Repositories/category.repo";

export class Categorycontroller {
  // @desc Create blog category
  // @path /:id/article
  // @access private
  static async createCategory(req: Request, res: Response) {
    let entityManager = getManager() || getConnection().manager;
    const manager = entityManager.getCustomRepository(CategoryRepository);
    await manager.createCategory(req, res);
  }
}
