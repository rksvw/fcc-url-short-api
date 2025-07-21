const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4000;
app.use(cors({ optionsSuccessStatus: 200 }));
app.use(express.static("public"));

// Enable middleware to parse JSON data int he request body
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.post("/api/shorturl", (req, res) => {
  const data = req.params;
  console.log(data);
  res.json({ success: "Successful" });
});

app.listen(PORT, () => {
  console.log(`System is running on port ${PORT}`);
});
