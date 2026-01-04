const nodemailer = require("nodemailer");
const { HttpError, controllerWrapper } = require("../helpers");

const { APP_PASSWORD } = process.env;

const nodemailerConfig = {
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "campbritish@gmail.com",
    pass: APP_PASSWORD,
  },
};

const sendEmail = async (req, res) => {
  const pdfBuffer = req.file.buffer;
  const { correspondent, emailSubject, emailContent } = req.body;
  const transporter = nodemailer.createTransport(nodemailerConfig);

  const preparedContent = emailContent
    .split("/n")
    .map((paragpaph) => "<p>" + paragpaph + "</p>")
    .join("");

  const mailOptions = {
    from: "campbritish@gmail.com",
    to: `${correspondent}`,
    subject: `${emailSubject}`,
    html: `${preparedContent}`,
    attachments: [
      {
        filename: req.file.originalname,
        content: pdfBuffer,
        contentType: "application/pdf",
      },
    ],
  };

  await transporter.verify();

  const info = await transporter
    .sendMail(mailOptions)
    .then((qwe) => {
      console.log(qwe);
      res.status(200).json({
        message: "Email successfuly sent",
      });
    })
    .catch(() => {
      throw HttpError(400, "Did not sent");
    });

  console.log(info);
};

module.exports = {
  sendEmail: controllerWrapper(sendEmail),
};
