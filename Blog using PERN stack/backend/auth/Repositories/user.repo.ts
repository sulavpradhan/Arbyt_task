import { EntityRepository, Repository } from "typeorm";
import { User } from "../Entities/User";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
// import dotenv from "dotenv";

// dotenv.config();

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  // Create a new user

  async createUser(req: Request, res: Response) {
    const { firstname, lastname, useremail, password, username } = req.body;

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    try {
      let user = new User();
      user.firstname = firstname;
      user.lastname = lastname;
      user.username = username;
      user.useremail = useremail;
      user.password = hashedPassword;

      let userData = await this.save(user);
      return res.send(userData);
    } catch (error) {
      res.send(error);
    }
  }

  // Login user

  async loginUser(req: Request, res: Response) {
    const { useremail, password } = req.body;

    try {
      const currentUser = await User.findOne({ useremail: useremail });

      if (
        currentUser &&
        (await bcrypt.compare(password, currentUser.password))
      ) {
        res.status(200).json({
          id: currentUser.id,
          name: currentUser.username,
          email: currentUser.useremail,
          token: this.generateToken(currentUser.id),
        });
      } else {
      }
    } catch (error) {
      res.send(error);
    }
  }

  generateToken = (id: string) => {
    const key: string = process.env.JWT_KEY!;
    console.log(key);
    return jwt.sign({ id }, key, {
      expiresIn: "3d",
    });
  };
}
