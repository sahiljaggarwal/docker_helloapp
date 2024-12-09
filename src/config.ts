import dotenv from "dotenv";
import path from "path";

const ENV = process.env.NODE_ENV ?? "development";

dotenv.config({
  path: path.resolve(__dirname, `../.env.${ENV}`),
});

const config = {
  nodeEnv: process.env.NODE_ENV,
  port: process.env.PORT,
  host: process.env.HOST,
};

export default config;
