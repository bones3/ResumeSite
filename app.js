var express = require("express");

var app = express();

app.get("/", function(res, req) {
	req.send("Hello, Justin");
});

var port = process.env.PORT || 1138;
app.listen(port);
