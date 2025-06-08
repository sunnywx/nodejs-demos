process.on('message', m=> {
  console.log('parent said: ', m)

  process.send('i love u too')
})
