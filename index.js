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
  res.send("hello node");
});

app.get("/users", function(req, res) {
  connection.query("SELECT * from users", function(err, rows) {
    if (err) throw err;
    res.send(rows);
  });
});

app.get("/users/:id", function(req, res) {
  connection.query(`SELECT * from users WHERE id = ${req.params.id}`, function(
    err,
    rows
  ) {
    if (err) throw err;
    res.send(rows);
  });
});

app.listen(app.get("port"), function() {
  console.log("Express server listening on port " + app.get("port"));
});
