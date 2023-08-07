import express from "express";

export const BaseRouter = express.Router();

BaseRouter.get("/", (req, res) => {
  res.send("Base Router for Users");
});
