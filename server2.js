require("dotenv").config(); // ALLOWS ENVIRONMENT VARIABLES TO BE SET ON PROCESS.ENV SHOULD BE AT TOP
const axios = require("axios");
const express = require("express");
const app = express();

// Middleware
app.use(express.json());

const FRESHSALES_API_KEY = process.env.FRESHSALES_API_KEY;
const FRESHSALES_DOMAIN = process.env.FRESHSALES_DOMAIN;
const API_URL = `https://${FRESHSALES_DOMAIN}/api/contacts`;

const headers = {
  Authorization: `Token token=${FRESHSALES_API_KEY}`,
  "Content-Type": "application/json",
};

// Create Contact
app.post("/contacts", async (req, res) => {
  try {
    const response = await axios.post(
      API_URL,
      {
        contact: req.body,
      },
      { headers }
    );

    res.status(201).json(response.data);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating contact", error: error.response.data });
  }
});

// Get All Contacts
app.get("/contacts", async (req, res) => {
  try {
    const response = await axios.get(API_URL, { headers });
    res.status(200).json(response.data);
    console.log(res.json(response.data));
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving contacts",
      error: error.response.data,
    });
  }
});

// Get Contact
app.get("/contacts/:id", async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}/${req.params.id}`, {
      headers,
    });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({
      message: "Error retrieving contact",
      error: error.response.data,
    });
  }
});

//Delete Contact
app.delete("/contacts/:id", async (req, res) => {
  try {
    await axios.delete(`${API_URL}/${req.params.id}`, { headers });
    res.status(204).send();
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting contact", error: error.response.data });
  }
});

// Listen on port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
