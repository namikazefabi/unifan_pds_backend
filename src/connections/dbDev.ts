import { DataSource } from "typeorm";
import { Task } from "../models/task";

// Local Environment - Ambiente local
// export const DevDataSource = new DataSource({
//     type: "postgres",
//     host: "localhost",
//     port: 5432,
//     username: "postgres",
//     password: "postgres",
//     database: "backend",
//     entities: [Task]
// })

// // Production Environment - AMBIENTE PRODUÇÃO
export const DevDataSource = new DataSource({
    type: "postgres",
    host: "dpg-csg29v5umphs73ag6m80-a.oregon-postgres.render.com",
    port: 5432,
    username: "tasks_db_xeip_user",
    password: "711MdxmDlhaxUE6DTpZhJiDDY0EuViQL",
    database: "tasks_db_xeip",
    extra: {
        options: "-c statement_timeout=30000ms -c search_path=monsters",
      },
    // url: "postgresql://tasks_db_xeip_user:711MdxmDlhaxUE6DTpZhJiDDY0EuViQL@dpg-csg29v5umphs73ag6m80-a/tasks_db_xeip",
    entities: [Task]
})