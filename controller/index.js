var models = require("../model");

module.exports = {
  users: {
    allUsers: function(req, res) {
      models.users.allUsers(function(err, rows) {
        if (err) res.send(err);
        res.send(rows);
      });
    },
    specificUser: function(req, res) {
      let { id } = req.params;
      models.users.specificUser(id, function(err, rows) {
        if (err) res.send(err);
        res.send(rows);
      });
    }
  }
};
