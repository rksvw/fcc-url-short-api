const express = require("express");
const { shortUrlId, shortUrl } = require("../controllers/get-controller");
const route = express.Router();

module.exports = route.get("/shorturl", shortUrl);
module.exports = route.get("/shorturl/:id", shortUrlId);
