import SMTPTransport from "nodemailer/lib/smtp-transport";
import { transporter, FromEmail, ToEmail } from "../utils";
import Mailgen from "mailgen";

interface IEmailParams {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const MailGenerator = new Mailgen({
  theme: "default",
  product: {
    name: "Keshav Joshi",
    link: "www.keshavjoshi.com",
  },
});

const sendEmail = ({
  name,
  email,
  phone,
  message,
}: IEmailParams): Promise<SMTPTransport.SentMessageInfo> => {
  const response: Mailgen.Content = {
    body: {
      greeting: false,
      title: `${name}`,
      dictionary: {
        email: email,
        phone: phone,
      },
      intro: message,
    },
  };
  const template = MailGenerator.generate(response);

  const mailOptions = {
    from: FromEmail,
    to: ToEmail,
    subject: `Message From - ${name}`,
    html: template,
  };

  return new Promise((resolve, reject) => {
    // reject("Email Rejected");
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject(error);
      } else {
        resolve(info);
      }
    });
  });
};

export const EmailService = {
  sendEmail,
};
