// Create Web Server - http Module
import http from 'http';

// Example - 1
// const server = http.createServer((req, res) => {
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Response from Server');
// });

// server.listen(8000, 'localhost', () => {
//     console.log('Server Running at http://localhost:8000')
// });


// Example - 2
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Response from Server 1');
});

const PORT = process.env.PORT || 8000;
const HOST = 'localhost';

server.listen(PORT, HOST, () => {
    console.log(`Server Running at http://${HOST}:${PORT}`)
});
