console.log('test ipc..')

setInterval(() => {
  // do nothing
}, 1e6);


process.on('SIGUSR1', ()=> {
  // get pid of current process
  // ps aux | grep ipc.js
  // then, `kill -s SIGUSR1 <pid> to trigger signal event`
  console.log('Got user signal..')

  process.exit(0)
})
