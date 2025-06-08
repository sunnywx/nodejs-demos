const path=require('path')
const fs=require('fs')
const {promisify}=require('util')

const readdir=promisify(fs.readdir)
const stat=promisify(fs.stat)

async function readDir(dir, acc=[]){
  const promises=(await readdir(dir)).map(async file=> {
    file=path.join(dir, file)
    // console.log('file: ', file)
    return (await stat(file)).isDirectory() && acc.push(file) && readDir(file, acc)
  })

  await Promise.all(promises)
  return acc
}

readDir('./').then(files=> console.log(files))

console.trace('error stack')
