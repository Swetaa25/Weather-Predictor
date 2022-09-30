"use strict";

var express = require('express');

var app = express();
var port = 8000; // const port = process.env.PORT || 3000 ;

app.use(express["static"]());
app.get(" ", function (req, res) {
  res.send("Welcome to Our Weather Forecast website.");
});
app.get("/about", function (req, res) {
  res.send("Welcome to Our Weather Forecast website.");
});
app.get("/weather", function (req, res) {
  res.send("Welcome to Our Weather Forecast website.");
});
app.get("*", function (req, res) {
  res.send("404 error page, OOPES!");
});
app.listen(port, function () {
  console.log("listening to the port at ".concat(port));
});
//# sourceMappingURL=app.dev.js.map
