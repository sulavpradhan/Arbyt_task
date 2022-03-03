// import express, { Request, Response } from "express";
// import dotenv from "dotenv";
// import { createConnection, Connection } from "typeorm";

// dotenv.config();

// class Server {
//   private app: express.Application;

//   constructor() {
//     this.app = express();
//     this.configuration();
//     this.routes();
//   }

//   public configuration() {
//     this.app.set("port", process.env.PORT);
//     console.log("this is port", process.env.PORT);
//   }

//   public routes() {
//     this.app.get("/", (req: Request, res: Response) => {
//       res.status(200).json({ message: "Welcome to the Blog using PERN api" });
//     });
//   }

//   public start() {
//     this.app.listen(this.app.get("port"), () => {
//       console.log(`Server is listening at port ${this.app.get("port")}.`);
//     });
//   }
// }

// const server = new Server();
// server.start();

import "reflect-metadata";
import express from "express";
import dotenv from "dotenv";
import config from "../ormconfig";
import { ConnectionOptions, createConnection } from "typeorm";
import { router } from "./routes/routes";

dotenv.config();
const app = express();

app.use(express.json());

const port = process.env.PORT;

app.use(express.urlencoded({ extended: false }));

createConnection(config as ConnectionOptions).then(async (connection) => {
  const app = express();

  app.use(express.json());

  const port = process.env.PORT;

  app.use(express.urlencoded({ extended: false }));

  app.use("/", router);

  app.listen(port, () => {
    console.log(`Server is listening at port ${port}.`);
  });
});
