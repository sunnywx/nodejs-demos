console.log('running..')

setInterval(() => {
  // keep event loop going..
}, 1e6);

process.on('SIGINT', ()=> {
  console.log('do some cleanup')
  // process.exit(1)
})

process.on('SIGUSR1', ()=> {
  console.log('received user cmd')
  process.exit(1)
})