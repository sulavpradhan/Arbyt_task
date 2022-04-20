import { EntityRepository, Repository } from "typeorm";
import { Article } from "../Entities/Article";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

@EntityRepository(Article)
export class ArticleRepository extends Repository<Article> {}
