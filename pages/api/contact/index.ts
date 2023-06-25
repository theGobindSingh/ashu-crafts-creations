import type { NextApiHandler } from "next";
import nodemailerClient from "@/clients/nodemailer-client";
import { FormDataType } from "@/interface-file";

const contactHandler: NextApiHandler = async (req, res) => {
  if (req.method === "POST" && req.body?.subject) {
    const mailCallback = (err: Error | null) => {
      if (err) {
        res.status(404).json({});
        return;
      }
    };
    try {
      const formData: FormDataType = req.body;
      const mailOptions = {
        from: process.env.USER_MAIL,
        to: process.env.USER_MAIL,
        subject: formData.subject,
        text: formData.text,
      };
      await nodemailerClient.sendMail(mailOptions, mailCallback);
      res.status(200).json({});
    } catch {
      res.status(500).json({});
    }
  } else {
    res.status(405).json({});
  }
  res.status(404).json({});
};

export default contactHandler;
