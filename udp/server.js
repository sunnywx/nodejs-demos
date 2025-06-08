import {createSocket} from 'node:dgram'
import {port} from './config.js'

let server=createSocket('udp4')

server.on('message', msg=> {
  process.stdout.write(`Got msg: ${msg}\n`)
  // process.exit()
}).bind(port, ()=> console.log(`udp server running at ${port}`))

