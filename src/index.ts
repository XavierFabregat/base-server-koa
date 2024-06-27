import koa from "koa";
import "./loadEnv";
import sequelize from "./models/index";

const { PORT } = process.env;

const server = new koa();

async function init(app: koa) {
  await sequelize.authenticate();
  console.log("Connection to database has been established successfully.");

  await sequelize.sync({ force: true }); // Sync all models
  console.log("All models were synchronized successfully.");

  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
}

init(server).catch((err: Error) => {
  console.log("ERR initializing server:\n", err.stack || err.message);
});
