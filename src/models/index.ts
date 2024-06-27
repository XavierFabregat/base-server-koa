import { Sequelize } from "sequelize-typescript";
import { DATABASE } from "../config/database.config";

const sequelize = new Sequelize(DATABASE.url!, {
  logging: DATABASE.logging!,
  dialect: DATABASE.dialect!,
  modelPaths: [__dirname + "/**/*.model.ts"],
});

export default sequelize;
