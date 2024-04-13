const express = require("express");

const { createContact, getAllMsg } = require("../Queries/contact.js");

const contact = express.Router();

contact.get("/", async (req, res) => {
  const allMsgs = await getAllMsg();
  if (allMsgs[0]) {
    res.status(200).json({ success: true, data: { payload: allMsgs } });
  } else {
    res.status(400).json({ success: false, data: { error: " No msg Found" } });
  }
});

contact.post("/", async (req, res) => {
  try {
    const createdMseg = await createContact(req.body);
    res.status(201).json(createdMseg);
  } catch (error) {
    console.error(error);
    res.status(400).json({ success: false, error: "Cannot create msg" });
  }
});

module.exports = contact;
