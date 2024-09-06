require("dotenv").config(); // ALLOWS ENVIRONMENT VARIABLES TO BE SET ON PROCESS.ENV SHOULD BE AT TOP
const axios = require("axios");
const express = require("express");
const app = express();

// Middleware
app.use(express.json());

// Redirect requests to endpoint starting with /posts to postRoutes.js
app.use("/contacts", require("./routes/contactsRoutes"));

// Listen on port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
