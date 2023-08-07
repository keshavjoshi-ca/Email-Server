import express from "express";
import { EmailService } from "../services";

export const EmailRouter = express.Router();

EmailRouter.post("/send-request", (req, res) => {
  const { name, email, phone, message } = req.body;

  EmailService.sendEmail({ name, email, phone, message })
    .then((info) => {
      res.status(201).json({
        status: info.response,
        id: info.messageId,
        message: "Email sent Successfully",
      });
    })
    .catch((error) => {
      res.status(400).send({
        status: "Failed",
        error: error,
      });
    });
});
