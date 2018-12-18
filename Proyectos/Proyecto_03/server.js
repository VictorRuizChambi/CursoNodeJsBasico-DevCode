var express = require('express'),
    swig = require('swig');
var server = express();

//config swig
server.engine('html',swig.renderFile);
server.set('view engine', 'html');
server.set('views',__dirname + '/app/views');

//configuraicón para que pueda servir archivos estaticos
server.use(express.static('./public'));

require('./app/controllers/home')(server);
server.listen(8000);