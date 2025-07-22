const { short_url_db } = require("../services/urlService");
const { app } = require("../app");

async function shortUrl(req, res) {
  const id = app.locals.urlShort;

  console.log(app.locals.urlShort);

  if (id === -1) {
    return res.status(404).send({ error: "invalid url" });
  }

  console.log(short_url_db);

  res.send({
    original_url: short_url_db[id],
    short_url: id,
  });
}

async function shortUrlId(req, res) {
  const id = req.params.id;

  if (!short_url_db[id]) {
    return res.json({ error: "No short URL found for the given input" });
  }

  res.redirect(short_url_db[id]);
}

module.exports = {
  shortUrl,
  shortUrlId,
};
