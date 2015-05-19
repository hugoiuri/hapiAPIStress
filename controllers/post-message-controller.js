var Joi = require('joi');

exports.register = function(server, options, next){
  server.route({
    method: 'POST',
    path: '/api/v1/message',
    handler: function(request, reply){

      reply(request.payload);

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
