const { short_url_db } = require("../services/urlService");
const { app } = require("../app");

async function shortUrl(req, res) {
  const id = app.locals.urlShort;

  if (id === -1) {
    return res.status(404).send({ error: "invalid url" });
  }

  const url = short_url_db[id];

  res.json({
    original_url: url,
    short_url: id,
  });
}

async function shortUrlId(req, res) {
  const url = short_url_db[req.params.id];

  if (url) {
    res.redirect(url);
  } else {
    res.json({ error: "No short URL found" });
  }
}

module.exports = {
  shortUrl,
  shortUrlId,
};
