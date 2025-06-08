// see how fast is node
function speed_loop(){
  const cycle=10000000000
  const start=Date.now()
  for(let i; i<cycle; i++){
    //
  }
  const end=Date.now()
  const duration=(end - start) / 1000
  console.log(`node looped %d times in %d secs`, cycle, duration)
}

speed_loop()