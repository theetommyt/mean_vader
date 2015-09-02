var http = require('http');
var fs = require('fs');

var json = fs.readFileSync('./person.json');

http.createServer(function(req, res){
  res.writeHead(200);
  res.write(json);
  res.end();
}).listen(5000);

console.log("this shit right here");
