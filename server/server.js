var bodyParser = require("body-parser");
var compression = require("compression");
var express = require("express");
var app = express();
var path = require("path");
var fs = require("fs");

var PORT = 3000;

app.use(compression());
app.use(bodyParser.json({ type: "application/json" }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', express.static(path.join(__dirname, 'book-store')));

app.get('/getBookList', function (req, res) {
    fs.readFile(__dirname + "/" + "data.json", 'utf8', function (err, data) {
        res.end(data);
    });
});

app.listen(PORT, function () {
    console.log("Server is running on " + PORT + " port");
});