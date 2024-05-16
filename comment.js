// create web server
// create a server
var http = require('http');
const fs = require('fs');
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

// create a server
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    // read the file
    fs.readFile('index.html', function(err, data) {
        res.write(data);
        return res.end();
    });
}).listen(8080); // listen to port 8080
