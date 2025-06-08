import {EventEmitter} from 'node:events'

function getEmitter(){
  const emitter=new EventEmitter

  process.nextTick(()=> {
    emitter.emit('start', 'anything')
  })
  return emitter
}

const emitter=getEmitter()

emitter.on('start', ()=> {
  console.log('started')
})
