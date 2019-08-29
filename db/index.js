var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "koreanJson"
});

connection.connect();

module.exports = connection;
