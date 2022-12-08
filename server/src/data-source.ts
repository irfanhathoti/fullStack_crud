import "reflect-metadata"
import { DataSource } from "typeorm"
import { employeeDetail } from "./entity/employeeDetail"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "restapi",
    synchronize: true,
    logging: false,
    entities: [employeeDetail],
    migrations: [],
    subscribers: [],
})
