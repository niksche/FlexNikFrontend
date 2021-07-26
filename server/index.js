let fs = require('fs');
let http = require('http');

const server = http.createServer((req,res)=> {

    const path = `./public${req.url === '/' ? '/index.html' : req.url }`;

    console.log('requested from ', req.url);
    fs.readFile(path, (error, file) => {
        if (error) {
            res.write('error');
            res.end;
            return;
        }
        res.write(file);
        res.end();
        return;
    });
    
});

server.listen(3003);