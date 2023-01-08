//HTTP in-Build module
//every single HTTP method

const http = require('http')

const server = http.createServer((req, res) =>{
    if (req.url === '/'){
        res.end('Welcome to our home page')
    }
    if (req.url === '/about'){
        res.end('Here is our page about us')
    }
    res.end('<h1>Ooops!</h1> <p>We can not seem to find the page you are looking for</p> <a href="/">back home</a>')
})

server.listen(5000)