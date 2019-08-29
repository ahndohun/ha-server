var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "koreanJson"
});

connection.connect();

var express = require("express");
var app = express();

app.set("port", process.env.PORT || 3000);

app.get("/", function(req, res) {
  res.send("Root");
});

app.get("/users", function(req, res) {
  connection.query("SELECT * from data", function(err, rows) {
    if (err) throw err;
    res.send(rows);
  });
});

app.listen(app.get("port"), function() {
  console.log("Express server listening on port " + app.get("port"));
});
