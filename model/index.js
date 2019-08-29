var db = require("../db");

module.exports = {
  users: {
    allUsers: function(result) {
      db.query("SELECT * from users", function(err, rows) {
        if (err) {
          result(null, err);
        } else {
          result(null, rows);
        }
      });
    },
    specificUser: function(pk, result) {
      db.query(`SELECT * from users WHERE id = ${pk}`, function(err, rows) {
        if (err) {
          result(null, err);
        } else {
          result(null, rows);
        }
      });
    }
  }
};
