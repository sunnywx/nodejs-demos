// "use strict"

// The value of this is determined by how the function is called (the call site), 
// not where the function is defined

function myFunc() {
  console.log('call myFunc')
  console.log('this:', this)
}

const obj={method: myFunc}

// direct call
myFunc()

// obj method call
obj.method()

// apply
myFunc.call(globalThis)

// inside other func
function wrapper(){
  myFunc()
}
wrapper()