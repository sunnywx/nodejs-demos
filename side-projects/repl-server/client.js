import net from 'net'

// better to use xterm.js to act as a fully terminal

// or use: nc localhost 8090
let sock=net.connect(process.env.PORT || 8090)
process.stdin.pipe(sock)
sock.pipe(process.stdout)

