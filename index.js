var express = require("express");
var app = express();
var controller = require("./controller");

app.set("port", process.env.PORT || 3000);

//라우팅
app.get("/", function(req, res) {
  res.send("hello node");
});
app.get("/users", controller.users.allUsers);
app.get("/users/:id", controller.users.specificUser);

app.listen(app.get("port"), function() {
  console.log("Express server listening on port " + app.get("port"));
});
