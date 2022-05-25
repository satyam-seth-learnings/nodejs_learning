// Create Web Server - http Module Properties
import http from 'http';

const server = http.createServer((req, res) => {
    // Request
    // console.log(req.url);
    if (req.url != '/favicon.ico') {
        console.log(req.url);
    }
    console.log(req.method);

    // Response
    // res.statusCode = 202;
    // res.statusMessage = "Good";
    // res.setHeader('Content-Type', 'text/plain');

    res.writeHead(202, "Good", { 'Content-Type': 'text/plain' })
    res.end('Response from Server');
});

const PORT = process.env.PORT || 8000;
const HOST = 'localhost';

server.listen(PORT, HOST, () => {
    console.log(`Server Running at http://${HOST}:${PORT}`)
});
