const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    let url = req.url
    if(url == '/') {
        res.writeHead(200, {"Content-Type": "text/html"})
        fs.createReadStream('index.html').pipe(res)
    } else if (url == '/about'){
        res.writeHead(200, {"Content-Type": "text/html"})
        fs.createReadStream('about.html').pipe(res)
    } else if (url == '/contact-me'){
        res.writeHead(200, {"Content-Type": "text/html"})
        fs.createReadStream('contact-me.html').pipe(res)
    } else {
        res.writeHead(404, {"Content-Type": "text/html"})
        fs.createReadStream('404.html').pipe(res)
    }
}).listen(8080, () => {
    console.log(`Server running on port : 8080`)
})