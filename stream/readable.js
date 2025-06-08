const {Readable}=require('stream')
const fs=require('fs')

const r=new Readable

const w=fs.createWriteStream('./counter.txt', {flags: 'w', mode: 0o666})

// console.log(r)

let count=0

r._read=function(){
  count++

  if(count>10){
    return r.push(null)
  }

  setTimeout(() => {
    r.push(count + '\n')
  }, 500);

}

r.pipe(process.stdout)
r.pipe(w)
