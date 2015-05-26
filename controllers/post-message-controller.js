var Joi = require('joi');
var mongoose = require('mongoose');

var db = mongoose.connection;

db.on('error', console.error);
db.once('open', function() {

});

var message = new mongoose.Schema({
  message: String
});
var Message = mongoose.model('message', message);

mongoose.connect('mongodb://localhost:27017/test');

exports.register = function(server, options, next){
  server.route({
    method: 'POST',
    path: '/api/v1/message',
    handler: function(request, reply){

      var message = new Message({
        message: request.payload.message
      });

      message.save(function(err, message) {
        if (err) return console.error(err);
        console.dir(message);
      });

      reply({"success": true});

    },
    config: {
      validate: {
        payload: {
          message: Joi.string().max(140).required(),
        }
      }
    }
  });

  next();

};

exports.register.attributes = {
  name: 'message-controller',
  version: '0.0.1'
};
