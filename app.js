const http = require('http');

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


server.listen(3000, () => {
    console.log('application now running on port 3000')
});