import { Request, Response } from "express";
import { getConnection, getManager } from "typeorm";
import { UserRepository } from "../Repositories/user.repo";

export class Authcontroller {
  //@desc Create a user
  //@route /Add
  //@access public

  static async createUser(req: Request, res: Response) {
    let entityManager = getManager() || getConnection().manager;
    const manager = entityManager.getCustomRepository(UserRepository);
    await manager.createUser(req, res);
  }

  //@desc login a user
  //@route /login
  //@access public

  static async loginUser(req: Request, res: Response) {
    let entityManager = getManager() || getConnection().manager;
    const manager = entityManager.getCustomRepository(UserRepository);
    await manager.loginUser(req, res);
  }

  //@desc verify user email
  //@route /add/verify/:token
  //@access public

  static async verifyUser(req: Request, res: Response) {
    let entityManager = getManager() || getConnection().manager;
    const manager = entityManager.getCustomRepository(UserRepository);
    await manager.verifyUser(req, res);
  }

  //@desc send reset password link
  //@route /add/passwordReset
  //@access public

  static async sendResetLink(req: Request, res: Response) {
    let entityManager = getManager() || getConnection().manager;
    const manager = entityManager.getCustomRepository(UserRepository);
    await manager.sendResetLink(req, res);
  }

  //@desc reset/forgot password
  //@route /add/passwordReset
  //@access public

  static async resetPassword(req: Request, res: Response) {
    let entityManager = getManager() || getConnection().manager;
    const manager = entityManager.getCustomRepository(UserRepository);
    await manager.resetPassword(req, res);
  }
}
