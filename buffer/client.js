const net = require('net')

const port = 5678
const sock = net.connect(port)

process.stdin.pipe(sock)
sock.pipe(process.stdout)
