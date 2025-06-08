const http=require('http')

let server=http.createServer((req, res)=> {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  })

  res.write('pong')
  res.end()
}).listen(8080)

server.on('request', (req, res)=> {
  req.setEncoding('utf-8')
  req.on('readable', ()=> console.log(req.read()))
  req.on('end', ()=> console.log('end'))
})
