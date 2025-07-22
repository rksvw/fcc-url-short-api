const {
  isValidUrl,
  randomNumber,
  short_url_db,
} = require("../services/urlService");
const { app } = require("../app");

async function shortUrl(req, res) {
  const url = req.body.url;

  if (!isValidUrl(url)) {
    console.log(url)
    app.locals.urlShort = -1;
    return res.json({ error: "invalid url" });
  }

  const shortUrlInt = randomNumber();
  short_url_db[shortUrlInt] = url;

  app.locals.urlShort = shortUrlInt;
  console.log(app.locals.urlShort);

  res.json({ original_url: url, short_url: shortUrlInt });
}

module.exports = {
  shortUrl,
};
