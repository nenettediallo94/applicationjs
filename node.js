let http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
}).listen(8080, () => {
    console.log("Serveur démarré sur http://localhost:8080");
});
