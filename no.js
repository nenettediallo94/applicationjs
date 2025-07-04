const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Bienvenue sur Node.js');
});

server.listen(3000, () => {
    console.log('running on http://localhost:3000');
});

