const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 122;
const app = express();

// Serve up static assets
app.use(express.static("/"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Define any API routes before this runs
app.get("/", function(req, res) {
    console.log("Getting home path");
  res.sendFile(path.join("/index.html"));
});

app.get("/about-us", function (req, res) {
    res.sendFile(path.join(__dirname, "./about-us.html"));
});

// route loads requests.html
app.get("/contact", function (req, res) {
    res.sendFile(path.join(__dirname, "./contact.html"));
});
app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
