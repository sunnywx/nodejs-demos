import {createSocket} from 'dgram'
import { port } from './config.js'

const client = createSocket('udp4')

let message=Buffer.from(process.argv[2] || 'hello js')
client.send(message, 0, message.length, port, '127.0.0.1')
