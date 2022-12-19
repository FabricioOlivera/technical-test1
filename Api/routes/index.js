import express from "express";
import cors from "cors";
import { routes } from "./files/data.js";
import { errorHandler } from "../middleware/errorHandler.js";

export const app = express();


app.use(cors());
app.use(express.json());
app.use("/files", routes);
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use(errorHandler);
