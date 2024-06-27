import { DATABASE } from "./database.config";

const development = {
  username: DATABASE.user,
  password: DATABASE.pswd,
  database: DATABASE.name,
  host: DATABASE.host,
  port: DATABASE.port,
  dialect: "postgres",
};

console.log(development);

export { development };
