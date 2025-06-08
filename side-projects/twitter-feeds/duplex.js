const stream=require('stream')
const net=require('net')

net.createServer(sock=> {
  sock.write('go ahead and type something..')
  sock.setEncoding('utf8')

  sock.on('readable',()=> {
    console.log('this: ', this)
    process.stdout.write(sock.read())
  })
}).listen(8080)
