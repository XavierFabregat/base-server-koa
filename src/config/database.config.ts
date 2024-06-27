import "../loadEnv";

export const DATABASE = {
  url: process.env.DATABASE_URL,
  user: process.env.DATABASE_USER,
  name: process.env.DATABASE_NAME,
  pswd: process.env.DATABASE_PASSWORD,
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  logging: false,
  dialect: "postgres" as const,
};
