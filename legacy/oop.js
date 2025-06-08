// demo-1
// class Example {
//   constructor() {
//     const proto = Object.getPrototypeOf(this);
//     console.log(Object.getOwnPropertyDescriptors(proto));
//   }
//   first(){}
//   second(){}
//   static third(){}
// }
//
// new Example()

// demo-2
// function bar() {
//   console.log(Object.prototype.toString.call(this));
// }
// bar.call(7)
// bar.call('ss')
// bar.call(undefined)
// bar.call(null)

// demo: this hard bind
function f(){
  console.log(this.a)
}

f.call({a: 'x'})

const g=f.bind({a: 'art'})
const h=g.bind({a: 'foo'})

g()
h()
g.call({a: 'hello'})

const obj={a: 'google', f, g, h}

obj.f()
obj.g()
obj.h()
