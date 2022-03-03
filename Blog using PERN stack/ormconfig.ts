// import { join } from "path";
import { ConnectionOptions } from "typeorm";
import { User } from "./backend/auth/Entities/User";
import dotenv from "dotenv";

dotenv.config();
console.log("from ormconfig.ts", process.env.POSTGRES_PASS);

const config = {
  host: "localhost",
  user: "postgres",
  password: "12345",
  database: "Arbyte_Blog",
};
const connectionsOptions: ConnectionOptions = {
  type: "postgres",
  host: "localhost",
  name: "default",
  port: 5432,
  username: "postgres",
  password: "12345",
  database: "Arbyte_Blog",
  synchronize: true,
  entities: [User],
  dropSchema: false,
};

export = connectionsOptions;
