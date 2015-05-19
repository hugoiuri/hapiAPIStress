var Hapi = require('hapi');
var plugins = require('./plugins');
var controllers = require('./controllers');
var server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: 7707
});

server.register(controllers.concat(plugins), function(err){
  if(err)
  {
    console.log(err);
    throw err;
  }

  server.start();
});
