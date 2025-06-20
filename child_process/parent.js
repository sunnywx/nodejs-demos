import cp from 'node:child_process'

const child=cp.fork(__dirname + './child.js')

// console.log('child: ', child)

child.on('message', (msg)=> {
  console.log('child said: ', msg)
})

child.send('i love u son')
