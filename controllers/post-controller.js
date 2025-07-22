const {
  isValidUrl,
  randomNumber,
  short_url_db,
} = require("../services/urlService");
const { app } = require("../app");

async function shortUrl(req, res) {
  const url = req.body.url;
  console.log(url);

  if (!isValidUrl(url)) {
    app.locals.urlShort = -1;
    console.log("Round 0 clear");
    return res.status(404).json({ error: "invalid url" });
  }

  console.log("Round 1 clear");
  const shortUrlInt = randomNumber();
  short_url_db[shortUrlInt] = url;
  console.log("Round 2 clear");

  app.locals.urlShort = shortUrlInt;
  console.log(app.locals.urlShort);

  res.status(200).json({ original_url: url, short_url: shortUrlInt });
}

module.exports = {
  shortUrl,
};
