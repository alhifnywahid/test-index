const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
	const response = await fetch("https://www.sofascore.com/api/v1/sport/25200/event-count");
	console.log(response);
	const result = await response.json();
	res.json(result);
});

app.get("/api", (req, res) => {
	res.json({ message: "Welcome to API endpoint!" });
});

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app; // Untuk Vercel
