"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const typeorm_1 = require("typeorm");
const User_1 = require("./Entities/User");
dotenv_1.default.config();
() => __awaiter(void 0, void 0, void 0, function* () {
    const connection = yield (0, typeorm_1.createConnection)({
        name: "mainDbConnection",
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "postgres",
        password: process.env.POSTGRESS_PASS,
        database: "Arbyte_Blog",
        logging: true,
        synchronize: true,
        entities: [User_1.User],
    });
});
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.configuration();
        this.routes();
    }
    configuration() {
        this.app.set("port", process.env.PORT || 5000);
    }
    routes() {
        this.app.get("/", (req, res) => {
            res.status(200).json({ message: "Welcome to the Blog using PERN api" });
        });
    }
    start() {
        this.app.listen(this.app.get("port"), () => {
            console.log(`Server is listening at ${this.app.get("port")} port.`);
        });
    }
}
const server = new Server();
server.start();
