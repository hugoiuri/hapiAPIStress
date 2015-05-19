var fs = require('fs');
var controllers = [];

fs.readdirSync(__dirname).forEach(function(file){
  if(file.match(/-controller\.js/gi))
    controllers.push(require(__dirname + '/' + file));
  });

module.exports = controllers;
