const http = require('http')
const fs = require('fs').promises

const host = 'localhost'
const port = 8080

let indexFile
let aboutFile
let contactFile
let errFile

const requestListener = (req, res) => {
    let url = req.url
    if(url === '/'){
        res.setHeader("Content-Type", "text/html")
        res.writeHead(200)
        res.end(indexFile)
    } else if (url === '/about'){
        res.setHeader("Content-Type", "text/html")
        res.writeHead(200)
        res.end(aboutFile)
    } else if (url === '/contact-me') {
        res.setHeader("Content-Type", "text/html")
        res.writeHead(200)
        res.end(contactFile)
    } else {
        res.setHeader("Content-Type", "text/html")
        res.writeHead(200)
        res.end(errFile)
    }
}

const server = http.createServer(requestListener)



const startServer = (link) => {
    fs.readFile(link)
    .then(contents => {
        if(link === 'index.html'){
            indexFile = contents
        } else if (link === 'about.html'){
            aboutFile = contents
        } else if (link === 'contact-me.html'){
            contactFile = contents
        } else {
            errFile = contents
        }
        server.listen(port, host, () => {
            console.log(`Server is running on http://${host}:${port}`)
        })
    })
    .catch(err => {
        console.error(`Could not read ${link} file: ${err}`);
        process.exit(1);
    })
}

startServer('index.html')
startServer('about.html')
startServer('contact-me.html')
startServer('404.html')
