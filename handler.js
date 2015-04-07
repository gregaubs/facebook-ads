var model = require('./model.js');
var jade = require('jade');
var path = __dirname + '/views/index.jade';
var fn = jade.compileFile(path);

var home = function(request, reply){
    console.log('request handler for "/"');
    reply('Hapi Boilerplate');
}
 


module.exports = {
	home: home
}

