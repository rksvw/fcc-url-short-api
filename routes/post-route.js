const express = require("express");
const { shortUrl } = require("../controllers/post-controller");
const route = express.Router();

module.exports = route.post("/shorturl", shortUrl);
