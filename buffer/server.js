let repl=require('repl')
let net=require('net')

net.createServer(sock=> {
  repl.start({
    prompt: '> ',
    input: sock,
    output: sock,
    terminal: true,
  }).on('exit', ()=> {
    sock.end()
  })
}).listen(5678)
