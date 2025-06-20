import repl from 'repl'
import net from 'net'

net.createServer(sock=> {
  repl.start({
    prompt: '> ',
    input: sock,
    output: sock,
    terminal: true
  }).on('exit', ()=> {
    sock.end()
  })
}).listen(process.env.PORT || 8090, ()=> console.log('repl server running'))