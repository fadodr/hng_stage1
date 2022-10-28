const http = require('http');
require('dotenv').config()

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader("Content-Type", "application/json");
    if (req.method == 'GET') {
        res.statusCode = 200;
        res.write(JSON.stringify({
            slackUsername: 'whowasi',
            backend: true,
            age: 22,
            bio: 'i don\'t have a bio to write for now'
        }));
    }
    else {
        res.statusCode = 404;
        res.write(
            JSON.stringify({ error: 'please use the get endpoint' })
        );
    }
    res.end();
});

const port = process.env.PORT || 3000

server.listen(port, () => {
    console.log(`running on port ${port}`)
});