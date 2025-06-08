console.log('test signal..')

setInterval(() => {
  
}, 1e6);

process.on('SIGINT', ()=> {
  console.log('we received sigint signal')

  // while(true){
  //   // never exit
  // }

  process.exit(1)
})
