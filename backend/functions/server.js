// backend/functions/server.js
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const functions = require("firebase-functions"); // ✅ Import Firebase Functions

// ✅ Initialize Express
const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Multer Configuration for File Uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// ✅ Firebase Config for Environment Variables
const EMAIL_USER = process.env.EMAIL_USER || functions.config().email.user;
const EMAIL_PASS = process.env.EMAIL_PASS || functions.config().email.pass;
const EMAIL_RECEIVER = process.env.EMAIL_RECEIVER || functions.config().email.receiver;

// ✅ Route to handle contact form submission
app.post("/api/contact", upload.array("files"), async (req, res) => {
  const { fullName, email, phone, company, message } = req.body;
  const attachments = req.files.map((file) => ({
    filename: file.originalname,
    content: file.buffer,
  }));

  try {
    // ✅ Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    // ✅ Email Configuration
    const mailOptions = {
      from: `"${fullName}" <${email}>`,
      to: EMAIL_RECEIVER,
      subject: "NEW JOB ENQUIRY",
      html: `
        <h2>Contact Form Submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company || "N/A"}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
      attachments,
    };

    // ✅ Send Email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email Error:", error);
    res.status(500).json({ success: false, error: "Error sending email." });
  }
});

module.exports = app;
