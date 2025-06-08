// test toString and valueOf
const obj={
  toString: ()=> '[Object thing]',
  valueOf: ()=> 20
}

console.log('obj: ' + obj)
