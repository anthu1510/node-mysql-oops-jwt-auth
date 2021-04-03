const http = require('http');
const app = require('./src/app');

const port = process.env.PORT || 2000;

const server = http.createServer(app);

server.listen(port, (err) => {
    if (err) throw err;
    console.log(`Server Started port: ${port}`);
});
