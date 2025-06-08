const {Writable}=require('stream')

const w=new Writable({
  decodeStrings: false
})

w._write=(chunk, encoding, callback)=> {
  console.log(chunk.toString())
  callback()
}

const written=w.write(Buffer.alloc(32, 'A'), (err, ...args)=> {
  console.log('err: ', err, 'args: ', args)
})

w.end()

console.log(written)
