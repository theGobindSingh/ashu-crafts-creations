import type { NextApiHandler } from "next";
import nodemailerClient from "@/clients/nodemailer-client";
import { FormDataType } from "@/interface-file";

const contactHandler: NextApiHandler = async (req, res) => {
  let isSuccess = false;
  let failCode = 405;
  if (req.method === "POST" && req.body?.subject) {
    const mailCallback = (err: Error | null) => {
      if (err) {
        failCode = 404;
        return;
      }
      isSuccess = true;
    };
    try {
      const formData: FormDataType = req.body;
      const mailOptions = {
        from: process.env.USER_MAIL,
        to: process.env.USER_MAIL,
        subject: formData.subject,
        text: formData.text,
      };
      nodemailerClient.sendMail(mailOptions, mailCallback);
      isSuccess = true;
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
