require("dotenv").config();
const nodemailer = require("nodemailer");
const db = require("../db/db.Config.js");

const getAllMsg = async () => {
  try {
    const allMsg = await db.any("SELECT * FROM contact_me");
    return allMsg;
  } catch (err) {
    console.error("Error in getAllMsg", err);
    throw err;
  }
};

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const createContact = async (contact) => {
  try {
    const createdMsg = await db.one(
      "INSERT INTO contact_me (username, email ,msg) VALUES($1,$2,$3) RETURNING *",
      [contact.username, contact.email, contact.msg]
    );

    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: "New Message from Portfolio",
      text: `Name: ${contact.username}\nEmail: ${contact.email}\nMessage: ${contact.msg}`,
    };

    await transporter.sendMail(mailOptions);


    return createdMsg;
  } catch (error) {
    return error;
  }
};

module.exports = {
  createContact,
  getAllMsg,
};
