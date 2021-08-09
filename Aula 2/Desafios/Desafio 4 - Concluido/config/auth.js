// auth.js
var passport = require("passport");
var passportJWT = require("passport-jwt");
var users = require("../model/users.js");
var cfg = require("./config.js");
var ExtractJwt = passportJWT.ExtractJwt;
var Strategy = passportJWT.Strategy;

var params = {
  secretOrKey: cfg.jwtSecret,
  jwtFromRequest: ExtractJwt.fromAuthHeader()
};

function findElement(element){
  users.forEach (function(value){
    if(value.id === value){
      return value;
    }
  })
  return null;
}

module.exports = function() {
  var strategy = new Strategy(params, function(payload, done) { //payload contém um JSON descodificado, logo terpa o atributo id do usuário
    console.dir(payload)
    var user = users.find(function(u) {
       return u.id === payload.id;
    });
    console.log(user)
    if (user) {
        done(null, user);
    } else {
        done(null, false);
      }
  });
  passport.use(strategy);
  console.log(strategy)
  return {
    initialize: function() {
      return passport.initialize();
    },
    authenticate: function() {
      return passport.authenticate("jwt", cfg.jwtSession);
    }
  };
};


