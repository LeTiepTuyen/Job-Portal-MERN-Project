const nodemailer = require("nodemailer");
require("dotenv").config();

const sendMail = async ({ email, html, subject }) => {
  // Cấu hình Mailtrap
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, // Thay thế Gmail host bằng Mailtrap host
    port: process.env.SMTP_PORT, // Thay thế Gmail port bằng Mailtrap port
    auth: {
      user: process.env.MY_EMAIL, // Tên đăng nhập Mailtrap
      pass: process.env.MY_PASSWORD, // Mật khẩu Mailtrap
    },
  });

  // Gửi email
  const info = await transporter.sendMail({
    from: '"2THN Careers" <no-reply@jobportal.com>', // Tên và email gửi
    to: email, // Email nhận
    subject: subject, // Chủ đề email
    html: html, // Nội dung email dạng HTML
  });

  return info;
};

module.exports = sendMail;
