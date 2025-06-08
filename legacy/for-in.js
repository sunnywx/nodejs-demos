// check for in iterate
const obj={
  // name: 's'
}

Object.defineProperty(obj, 'name', {
  enumerable: true,
  value: 'ss'
})

proto={
  propName: 'upper name'
}

Object.setPrototypeOf(obj, proto)

for (let p in obj){
  console.log('prop: ', p, Object.getOwnPropertyDescriptor(obj, p))

  // if(obj.hasOwnProperty(p)){
  //   console.log('prop: ', p)
  // }
}
