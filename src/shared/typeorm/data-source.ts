import "reflect-metadata";
import { DataSource } from "typeorm";
import path from "path";
import Animal from "@modules/animals/typeorm/entities/Animals";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "docker",
    database: "apizoo",
    synchronize: false,
    logging: true,
    entities: [Animal],
    migrations: [path.join("src", "shared", "typeorm", "migrations", "*.ts")],
    subscribers: [],
});