//! start a server running on port 3000

// const http = require('http');
// const fs = require('fs');

// const hostname = '127.0.0.1';

// const port = 3000;

// fs.readFile('index.html', (err, html) => {
//     if(err) {
//         throw err
//     }

//     const server = http.createServer((req, res) => {
//         res.statusCode = 200;
//         res.setHeader('Content-type', 'text/html');
//         res.write(html);
//         res.end();
//     })
    
//     server.listen(port, hostname, () => {
//         console.log('Server is started on port '+port+' ....');
//     })    
// })

const _ = require('lodash');

const names = ['albert', 'bob', 'john', 'henry', 'zoey'];

_.each(names, (name) => {
    console.log(name);
})