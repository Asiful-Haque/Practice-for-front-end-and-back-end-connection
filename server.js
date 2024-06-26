// server.js
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

// In-memory database
let database = [];

// Middleware
app.use(bodyParser.json());
app.use(express.static("public"));

// Endpoint to submit data
app.post("/api/submit", (req, res) => {
    const { name, address, income } = req.body;
    database.push({ name, address, income });
    console.log("Data received:", { name, address, income });
    res.json({ message: "Data saved successfully!", data: { name, address, income } });
});

// Endpoint to get data
app.get("/api/getData", (req, res) => {
    res.json(database);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
