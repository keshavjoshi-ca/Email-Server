import express from "express";
import dotnev from "dotenv";
import { ErrorHandler, Logger } from "./middlewares";
import { BaseRouter, EmailRouter } from "./routes";

dotnev.config();

const PORT = process.env.PORT || 3000;

const server = express();
server.use(express.json());
server.use(Logger);

server.use("/api/v1/user", BaseRouter);
server.use("/api/v1/email", EmailRouter);

server.use(ErrorHandler);

server.listen(3000, () => {
  console.log(`🟢 Server listening at port ${PORT}`);
});
