import {Readable} from 'node:stream'
import {WriteStream} from 'node:fs'

const r=new Readable
const w=new WriteStream('./mock-text.txt', {flags: 'w', mode: '0666'})

const text='what is open AI? this is a mock response from LLM..'

let count=0
r._read=function(){
  if(count >= text.length){
    console.log('\nwrite text done')
    return this.push(null)
  }
  setTimeout(() => {
    this.push(text[count++])
  }, 20);
}

r.pipe(process.stdout)

r.pipe(w)

