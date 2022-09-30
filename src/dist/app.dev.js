"use strict";

var express = require('express');

var path = require('path');

var hbs = require('hbs');

var app = express(); // const port = 8000

var port = process.env.PORT || 3000; // public static path

var static_path = path.join(__dirname, "../public");
var template_path = path.join(__dirname, "../templates/views");
var partials_path = path.join(__dirname, "../templates/partials");
app.set('view engine', 'hbs');
app.set('views', template_path);
hbs.registerPartials(partials_path);
app.use(express["static"](static_path)); // routing

app.get("/", function (req, res) {
  res.render('index');
});
app.get("/about", function (req, res) {
  res.render('about');
});
app.get("/weather", function (req, res) {
  res.render('weather');
});
app.get("*", function (req, res) {
  res.render('404error', {
    errorMsg: 'OOpes! Page Not Found'
  });
});
app.listen(port, function () {
  console.log("listening to the port at ".concat(port));
});
//# sourceMappingURL=app.dev.js.map
