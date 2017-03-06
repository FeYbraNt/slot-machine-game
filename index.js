const jquery = require('jquery');
var http = require('http'),
    path = require('path'),
    fs = require('fs');

http.createServer(function (request, response) {
    
    var filePath = '.' + request.url;
    if (filePath == './')
        filePath = './index.html';
    
    var extname = path.extname(filePath);
    var contentType = 'text/html';
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.png':
            contentType = 'image/png';
            break;
    }
    
    fs.readFile(filePath, function(error, content) {
       if (error) {
           response.writeHead(500);
           response.end();
       } 
       else {
           response.writeHead(200, { 'Content-Type': contentType });
           response.end(content, 'utf-8');
       }
    });
    
}).listen(3000);
console.log('Server running at http://localhost:3000/');

