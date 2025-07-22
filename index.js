const { express, app } = require("./app");
const cors = require("cors");
const bodyParser = require("body-parser");
const getRoute = require("./routes/get-route");
const postRoute = require("./routes/post-route");
const dns = require("dns");
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

app.use("/api", postRoute);
app.use("/api", getRoute);

app.listen(PORT, () => {
  console.log(`System is running on port ${PORT}`);
});
