import express from "express";
import config from "./config";
import cors from "cors";
import morgan from "morgan";
const app = express();
app.use(cors());
app.use(express());
app.use(morgan("dev"));

const port = config.port ?? 3001;
const mode = config.nodeEnv;
const host = config.host ?? "localhost";

app.use(cors());
app.use(morgan("dev"));

app.get("/", (req: any, res: any) => {
  try {
    return res.status(200).json({ msg: `hello from server mode: ${mode}` });
  } catch (error) {
    console.log("error: ", error);
    return res.status(500).json({ error: "internal server error" });
  }
});

app.listen(port, () => {
  console.log(`server is running on http://${host}:${port}`);
});
