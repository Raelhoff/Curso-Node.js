// index.js
var express = require("express");  
var bodyParser = require("body-parser");  
var jwt = require("jwt-simple");  
var auth = require("./config/auth.js")();  
var users = require("./model/users.js");  
var cfg = require("./config/config.js");  
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());
app.use(auth.initialize());

app.get("/", function(req, res) {  
    res.json({
        status: "Minha API esta executando!"
    });
});

app.get("/user", auth.authenticate(), function(req, res) {
  console.log("Ok")  
  var user = users.find(function(u) {
            return u.id=== req.user.id;
  });
    res.json(user);
});

app.post("/token", function(req, res) {  
    if (req.body.email && req.body.password) {
        var email = req.body.email;
        var password = req.body.password;
        var user = users.find(function(u) {
            return u.email === email && u.password === password;
        });
        if (user) {
            var payload = {
                id: user.id
            };
            var token = jwt.encode(payload, cfg.jwtSecret);
            res.json({
                token: token
            });
        } else {
            res.sendStatus(401);
        }
    } else {
        res.sendStatus(401);
    }
});

app.listen(3000, function() {  
    console.log("Express sendo executado...");
});
