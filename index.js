const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const {
  isValidUrl,
  randomNumber,
  short_url_db,
} = require("./services/urlService");
const app = express();
const PORT = 4000;

// Middleware for static files and folders
app.use(express.static("public"));

// Middleware for proxy urls
app.use(cors({ optionsSuccessStatus: 200 }));

// Middleware for parsing JSON data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

// First API encountered by User
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// Second API magic workdone to short the url
app.post("/api/shorturl", (req, res) => {
  const url = req.body.url;

  console.log(url.match(/https?\:\/\/www\.[a-z0-9]{1,}\.[a-z]{1,}/));

  if (!isValidUrl(url)) {
    app.locals.urlShort = -1;
    return res.status(404).json({ error: "Invalid URL" });
  }

  const shortUrlInt = randomNumber();
  short_url_db[shortUrlInt] = url;

  app.locals.urlShort = shortUrlInt;

  res.status(200).send({ original_url: url, short_url: shortUrlInt });
});

// Third API for both Success && Failure
app.get("/api/shorturl", (req, res) => {
  const _id = app.locals.urlShort;

  if (_id === -1) {
    return res.status(404).send({ error: "invalid url" });
  }

  res.json({
    original_url: short_url_db[_id],
    short_url: _id,
  });
});

app.get("/api/shorturl/:id", (req, res) => {
  const id = req.params.id;

  if (!short_url_db[id]) {
    return res.json({ error: "No short URL found for the given input" });
  }

  res.redirect(short_url_db[id]);
});

app.listen(PORT, () => {
  console.log(`System is running on port ${PORT}`);
});
