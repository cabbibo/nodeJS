// JavaScript Document

var http = require('http');


str = "node.js";
buf = new Buffer(str.length);

for (var i = 0; i < str.length ; i++) {
  buf[i] = str.charCodeAt(i);
}


http.createServer(function(request, response){
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end(buf);
}).listen(8124)



console.log(buf);
console.log('Server running at http://127.0.0.1:8124/');