// show v8 optimize/de-optimize tips

// let someFunc=function foo(){}
// console.log(%FunctionGetName(someFunc))

let that=this

setTimeout(function() {
  console.log(this)
  console.log(this === that)

  console.log('global: ', global)

  // console.log(this === global)
  // console.log(this === globalThis)
}, 500);

setTimeout(() => {
  console.log(this === that)  // true
}, 500);
