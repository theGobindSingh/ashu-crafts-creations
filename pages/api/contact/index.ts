import type { NextApiHandler } from "next";
import type SMTPTransport from "nodemailer/lib/smtp-transport";
import nodemailerClient from "@/clients/nodemailer-client";
import { FormDataType } from "@/interface-file";

const contactHandler: NextApiHandler = async (req, res) => {
  let isSuccess = false;
  let failCode = 405;
  const verificationPromise = new Promise((resolve, reject) => {
    nodemailerClient.verify(function (error, success) {
      if (error) {
        failCode = 404;
        reject(error);
      } else {
        isSuccess = true;
        resolve(success);
      }
    });
  });
  await verificationPromise;
  if (req.method === "POST" && req.body?.subject) {
    try {
      const formData: FormDataType = req.body;
      const mailOptions = {
        from: process.env.USER_MAIL,
        to: process.env.USER_MAIL,
        subject: formData.subject,
        text: formData.text,
      };
      const sendMailPromise = new Promise((resolve, reject) => {
        const mailCallback = (
          err: Error | null,
          info: SMTPTransport.SentMessageInfo
        ) => {
          if (err) {
            failCode = 404;
            reject(err);
            return;
          } else {
            isSuccess = true;
            resolve(info);
          }
        };
        nodemailerClient.sendMail(mailOptions, mailCallback);
      });
      await sendMailPromise;
    } catch {
      failCode = 500;
    }
  } else {
    failCode = 405;
  }
  failCode = 404;
  if (isSuccess) {
    res.status(200).json({});
    return;
  } else {
    res.status(failCode).json({});
  }
};

export default contactHandler;
