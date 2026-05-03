require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;

// 🌍 REAL API (free)
app.get("/convert", async (req, res) => {
  let { from, to, amount } = req.query;

  try {
    let response = await fetch(`https://api.frankfurter.app/latest?from=${from}&to=${to}`);
    let data = await response.json();

    let rate = data.rates[to];
    let result = amount * rate;

    res.json({ result });

  } catch (error) {
    res.json({ error: "API failed" });
  }
});

app.listen(PORT, () => {
  console.log("Server running on", PORT);
});