import { Request, Response, NextFunction } from "express";
import { User } from "../auth/Entities/User";
import jwt from "jsonwebtoken";

async function protect(req: Request, res: Response, next: NextFunction) {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      //get the token
      const token: string = req.headers.authorization.split(" ")[1];
      //verify the token
      const decodedToken = <any>jwt.verify(token, process.env.JWT_KEY!);
      const id = decodedToken.id;
      req.user = await User.findOne({ id: id });
      next();
    } catch {
      res.status(401).send({
        error: "Not authorized!",
      });
    }
  }
}

export default protect;
