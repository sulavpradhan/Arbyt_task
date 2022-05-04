import "reflect-metadata";
import express from "express";
import dotenv from "dotenv";
import config from "../ormconfig";
import { ConnectionOptions, createConnection } from "typeorm";
import { router } from "./routes/routes";
import { articleRouter } from "./routes/articleRoutes";
import { categoryRouter } from "./routes/categoryRoutes";

dotenv.config();

createConnection(config as ConnectionOptions).then(async (connection) => {
  const app = express();

  app.use(express.json());

  const port = process.env.PORT;

  app.use(express.urlencoded({ extended: false }));

  app.use("/", router);
  app.use("/article", articleRouter);
  app.use("/category", categoryRouter);

  app.listen(port, () => {
    console.log(`Server is listening at port ${port}.`);
  });
});
