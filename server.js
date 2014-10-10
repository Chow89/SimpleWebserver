var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req, res){
	var url = req.url.substring(1, req.url.length);
	res.writeHead(200, {'Content-Type':'text/html'});
	fs.readFile(url,'utf8', function(error, data){
		res.end(data);
	});
}).listen(1337);