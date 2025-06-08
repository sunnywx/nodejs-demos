// es6 set
const s=new Set();

const fn=()=> console.log('noop');

s.add(fn);
s.add(fn);
s.add(fn);

console.log(`set: `, s)
