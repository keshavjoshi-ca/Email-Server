import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.Email,
    pass: process.env.EmailPassword,
  },
});

export const FromEmail = process.env.Email;
export const ToEmail = process.env.ToEmail;
