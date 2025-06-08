// mimic function.prototype.bind
function hardBind(receiver, fn){
  // wrapper with this hard bind
  return function (...args){
    return fn.apply(receiver, args)
  }
}

function softBind(receiver, fn){
  return function (...args){
    // console.log('ctx: ', this, receiver)
    return fn.apply(!this || this === globalThis && args.length === 0 ? receiver : this, args);
  }
}

const ctx={a: 'xx'}
const fn=function (){console.log(this.a)}

console.log('// test hard bind')
const hb1=hardBind(ctx, fn)
hb1.call()
hb1()
hb1.call({a: 'aa'})

console.log('\n// test soft bind')
const sb1=softBind(ctx, fn)
sb1.call()
sb1()
sb1.call({a: 'dd'})
