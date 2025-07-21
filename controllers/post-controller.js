const {
  isValidUrl,
  randomNumber,
  short_url_db,
} = require("../services/urlService");
const express = require("express");
const app = express();

async function shortUrl(req, res) {
  const url = req.body.url;

  if (!isValidUrl(url)) {
    app.locals.urlShort = -1;
    return res.status(404).json({ error: "invalid url" });
  }

  const shortUrlInt = randomNumber();
  short_url_db[shortUrlInt] = url;

  app.locals.urlShort = shortUrlInt;
  console.log(app.locals.urlShort);
  console.log(app.locals)

  res.status(200).send({ original_url: url, short_url: shortUrlInt });
}

module.exports = {
  shortUrl,
};
