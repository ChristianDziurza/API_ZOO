"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const path_1 = __importDefault(require("path"));
const Animals_1 = __importDefault(require("@modules/animals/typeorm/entities/Animals"));
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "docker",
    database: "apizoo",
    synchronize: false,
    logging: true,
    entities: [Animals_1.default],
    migrations: [path_1.default.join("src", "shared", "typeorm", "migrations", "*.ts")],
    subscribers: [],
});
//# sourceMappingURL=data_source.js.map