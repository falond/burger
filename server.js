// Declares Express dependencies		
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

//Configures Express server
var app = express();
app.set("port", (process.env.PORT || 3000));

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
// Parse application/x-www-form-urlencoded
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));
// override with POST having ?_method=DELETE
app.use(methodOverride("_method"));












// Make public a static directory
app.use(express.static(process.cwd() + "/public"));

// Listening
 app.listen(app.get("port"), function() {
  console.log("listening on port %d in %s mode",
  this.address().port, app.settings.env);
});